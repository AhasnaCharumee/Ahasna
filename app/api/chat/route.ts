export const runtime = "nodejs"

const systemPrompt = `You are an intelligent AI assistant for a developer's portfolio. Your role is to help visitors learn more about the portfolio owner's skills, projects, and experience.

When answering questions:
- Be professional, friendly, and helpful
- Focus on the portfolio owner's work and achievements
- If asked about specific projects, provide insights about the technologies used and outcomes
- If you don't have specific information, politely suggest they check the portfolio sections or contact directly
- Keep responses concise and engaging
- Use a conversational tone that feels natural and welcoming

Available portfolio sections: Hero, About, Projects, Skills, and Contact. Reference these when relevant.`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...messages,
        ],
        max_tokens: 1024,
        temperature: 0.7,
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`)
    }

    // Return streaming response
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return Response.json({ error: "Failed to process chat request" }, { status: 500 })
  }
}
