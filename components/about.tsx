export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-muted-foreground">
              Full-Stack Developer in Training | IJSE Student
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-accent font-semibold">Ahasna
                Charumee</span>, a passionate full-stack developer currently
                studying at IJSE. I build modern, scalable web applications
                using technologies like <span className="text-primary">
                Spring Boot, Java, Python, React, Next.js, TypeScript,
                JavaScript, HTML,</span> and <span className="text-primary">
                CSS</span>.
              </p>

              <p>
                My journey began with simple curiosity: “How do websites
                actually work?” That curiosity turned into a deep interest in
                backend and frontend engineering, leading me to create real
                projects from scratch such as an AI-based task management
                system, full-stack applications, and team-based solutions for
                competitions and academic modules.
              </p>

              <p>
                I love writing clean, maintainable code and exploring new
                technologies. Whether it's improving UI design, optimizing
                APIs, or architecting backend logic, I always aim to create
                meaningful digital experiences.
              </p>
            </div>

            {/* Right Side Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors">
                <div className="text-4xl font-bold text-accent mb-2">+15</div>
                <p className="text-muted-foreground">Personal Projects</p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors">
                <div className="text-4xl font-bold text-accent mb-2">+1</div>
                <p className="text-muted-foreground">Current Team Projects</p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors">
                <div className="text-4xl font-bold text-accent mb-2">+7</div>
                <p className="text-muted-foreground">Technologies Learned</p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:border-accent transition-colors">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Growth Mindset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
