"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface HeroProps {
    setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
        setActiveSection(id)
    }

    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Text Side ----------------------- */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-accent font-semibold tracking-wider">
                                Welcome to my portfolio
                            </p>

                            <h1 className="text-5xl sm:text-6xl font-bold text-balance">
                                Crafting digital experiences
                            </h1>

                            <p className="text-xl text-muted-foreground max-w-xl">
                                I'm Ahasna Charumee, a full-stack developer passionate about building beautiful,
                                performant web applications with clean code and thoughtful design.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => scrollToSection("projects")}
                                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold flex items-center gap-2 transition-all hover:gap-3"
                            >
                                View My Work
                                <ArrowRight size={20} />
                            </button>

                            <button
                                onClick={() => scrollToSection("contact")}
                                className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 rounded-lg font-semibold transition-colors"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    {/* Right Image Side ----------------------- */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="relative w-80 h-80">
                            {/* Glow Background */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl"></div>

                            {/* Main Card */}
                            <div className="relative bg-secondary rounded-3xl border border-border p-8 flex items-center justify-center h-full">
                                <div className="text-center">

                                    {/* Profile Image */}
                                  <Image
                                        src="/ahasna.jpg"
                                        alt="Ahasna Charumee"
                                        width={520}
                                        height={520}
                                        className="rounded-2xl object-cover shadow-lg"
/>


                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
