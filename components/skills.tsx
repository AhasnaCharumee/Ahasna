const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "HTML/CSS","JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "MySQL", "MongoDB", "REST APIs","Spring Boot","Java"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Vercel", "Firebase", "GitHub Actions", "Fly.io"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Skills & Technologies</h2>
            <p className="text-muted-foreground">Technologies I work with regularly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-accent transition-colors cursor-pointer"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
