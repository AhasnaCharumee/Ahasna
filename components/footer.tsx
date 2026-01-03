export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-bold text-lg bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </p>
            <p className="text-muted-foreground text-sm mt-1">© 2025 All rights reserved</p>
          </div>

          <div className="flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
