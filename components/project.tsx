"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const academicProjects = [
    {
    id: 1,
    title: "driving school management system",
    description:
      "First semester ,implemented using Java and MVC architecture, this system streamlines student enrollment, class scheduling, instructor management, and payment processing for driving schools.",
    image: "/driving.jpg",
    tags: ["Java", "MVC"],
    links: {
      live: "https://youtu.be/HWu9mU3luZ4",
      github: "https://github.com/AhasnaCharumee/Sisira-Learners-MVC",
    },
  },
  {
    id: 2,
    title: "Tic Tac Toe",
    description:
      "A strategic AI-driven Tic-Tac-Toe game developed using Java. Includes the Minimax algorithm for challenging AI gameplay.",
    image: "/tic.png",
    tags: ["Java"],
    links: {
      live: "https://youtu.be/_5IDFlqUqeA",
      github: "https://github.com/AhasnaCharumee/Tic-Tac-Toe-Game",
    },
  },
  {
    id: 3,
    title: "driving school management system",
    description:
      "Second semester - The driving school management system implemented by using Java and Layered architecture, this system streamlines student enrollment, class scheduling, instructor management, and payment processing for driving schools.",
    image: "/lay.jpg",
    tags: ["Java","Layered Architecture"],
    links: {
      live: "https://youtu.be/HWu9mU3luZ4",
      github: "https://github.com/AhasnaCharumee/Sisira-Learners-Layared",
    },
  },
  {
    id: 4,
    title: "Programming Fundamental Course Work",
    description:
      "First semester - student management programming coursework using Java, simple terminal project.",
    image: "/pro.png",
    tags: ["Java"],
    links: {
      live: "https://youtu.be/DitUUG5mZOU",
      github: "https://github.com/AhasnaCharumee/course-work-PRF",
    },
  },
  {
    id: 5,
    title: "Hotel AHASRA",
    description:
      "Second semester - This is a hotel website using HTML, CSS, and Bootstrap, a simple project.",
    image: "/hotel.png",
    tags: ["Javascript" , "HTML","css"],
    links: {
      live: "https://hotel-ahasra.web.app",
      github: "https://github.com/AhasnaCharumee/Hotel-AHASRA",
    },
  },
  {
    id: 6,
    title: "Mental Health Center",
    description:
      "Second semester - A comprehensive digital system developed to manage patient registrations, therapy programs, session scheduling, therapist management, and financial transactions for the Serenity Mental Health Therapy Center in Sri Lanka.",
    image: "/orm.png",
    tags: ["Java", "Hibernate", "ORM"],
    links: {
      live: "https://youtu.be/L2zF5BROBCQ",
      github: "https://github.com/AhasnaCharumee/ORM-MENTAL-HEALTH-CENTER-HIBERNATE",
    },
  },
    {
    id: 7,
    title: "Job Management System",
    description:
      "Second semester - Features like job creation, editing, deletion, status updates, and search functionality.",
    image: "/job.png",
    tags: ["Java", "Spring Boot", "JPA", "ModelMapper", "Maven", "JavaScript", "Bootstrap", "HTML", "CSS"],
    links: {
      live: "https://youtu.be/RTBTl8p_I6A",
      github: "https://github.com/AhasnaCharumee/Job-Management-System",
    },
  },
]

const myProjects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "implemented by using HTML and CSS",
    image: "/port.png",
    tags: ["HTML", "CSS"],
    links: {
      live: "https://my-portfolio-f088c.web.app/",
      github: "https://github.com/AhasnaCharumee/my-Portfolio",
    },
  },
  {
    id: 2,
    title: "Endemic Birds in Sri Lanka - website",
    description:
      "implemented by using HTML and CSS",
    image: "/endemic.png",
    tags: ["HTML", "CSS"],
    links: {
      live: "https://endemic-birds.web.app",
      github: "https://github.com/AhasnaCharumee/Sri-Lanka-Endemic-Birds-HTML",
    },
  },
  {
    id: 3,
    title: "Movie Founder App",
    description:
      "Created a Movie Search App using the OMDb API, displaying movie data like title, poster, plot, and writer",
    image: "/filmone.png",
    tags: ["javaScript", "HTML", "CSS"],
    links: {
      live: "https://youtu.be/B5DCRMAuQlo",
      github: "https://github.com/AhasnaCharumee/SKYREK-JS-DAY",
    },
  },
  {
    id: 4,
    title: "Memory Match Game",
    description:
      "A card-matching game where players flip cards to find pairs, aiming for the least moves and time",
    image: "/match.png",
    tags: ["javaScript", "HTML", "CSS"],
    links: {
      live: "https://memory-match-aa164.web.app",
      github: "https://github.com/AhasnaCharumee/Memory-Match-Game",
    },
  },
   {
    id: 5,
    title: "Complaint Management System",
    description:
      "A full-stack web-based application developed for managing public complaints within a municipal organization.",
    image: "/com.png",
    tags: ["java", "javascript", "CSS"],
    links: {
      live: "https://youtu.be/ldm7bI7Dwdc",
      github: "https://github.com/AhasnaCharumee/Complaint-Management-System",
    },
  },
  {
    id: 6,
    title: "Blogsphere - Blog Platform",
    description:
      "User authentication & Google login integration, CRUD operations for blog posts, comments, and user profiles.,AI chatbot assistant for instant Q&A support.",
    image: "/blog.png",
    tags: ["java", "Maven", "Node.js", "MySQL", "Spring Boot"],
    links: {
      live: "https://www.youtube.com/watch?v=tyymAEO98mo",
      github: "https://github.com/AhasnaCharumee/Blog-Management-System",
    },
  },
   {
    id: 7,
    title: "Travel Planner App",
    description:
      "Trip Management,File Upload System, Authentication,Maps & Visualization",
    image: "/trav.png",
    tags: ["Prisma", "NextAuth.js v5 ", "Three.js", "React 19", "TypeScript","Tailwind CSS","Neon"],
    links: {
      live: "https://youtu.be/mx8m_YO_2Dc",
      github: "https://github.com/AhasnaCharumee/Travel-Planner-App",
    },
  },
  {
    id: 8,
    title: "react-movie-project",
    description:
      " A sleek, modern React-based movie discovery application,The Movie Database (TMDB) integration for real-time movie data fetching",
    image: "/film.png",
    tags: [  "React ","TMDB API"],
    links: {
      live: "https://youtu.be/4wQrzN7XvZY",
      github: "https://github.com/AhasnaCharumee/react-movie-project",
    },
  },
  {
    id: 9,
    title: "E-Commerce Platform",
    description:
      "This is a modern E-Commerce web application built with React, TypeScript, Vite, and Tailwind CSS.",
    image: "/eco.png",
    tags: [  "TypeScript","javascript","Html" ,"CSS"],
    links: {
      live: "https://youtu.be/qi5O8zzDrEM",
      github: "https://github.com/AhasnaCharumee/E-Commerce-Website-",
    },
  },
  {
    id: 10,
    title: "Task Management System",
    description:
      " A sleek, modern React-based movie discovery application,The Movie Database (TMDB) integration for real-time movie data fetching",
    image: "/task.png",
    tags: [  "TypeScript","javascript","Html" ,"CSS"],
    links: {
      live: "https://task-focus-frontend-1xnv.vercel.app/",
      github: "https://github.com/AhasnaCharumee/E-Commerce-Website-",
    },
  },
   {
  id: 11,
  title: "Chatbot For Mental Health / Productivity Coaching",
  description: "A cross-platform mobile chatbot (React Native)...",
  image: "/mental.png",
  tags: ["React Native", "ChatGPT API", "Vercel"],
  links: {
    live: "https://mental-health-chatbot-frontend-dxerfkuc4.vercel.app/",
    github: "https://github.com/AhasnaCharumee/mental-health-chatbot-backend",
  },
},
   {
  id: 12,
  title: "Flood Support Organization",
  description: "My current project is to develop a comprehensive web application for a Flood Support Organization. This platform aims to streamline the management of flood relief efforts, including volunteer coordination, resource allocation, and real-time communication during flood emergencies. The application will feature user-friendly interfaces for both administrators and volunteers, ensuring efficient collaboration and response during critical times.",
  image: "/flood.png",
  tags: ["TypeScript",  "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  links: {
    live: "https://flood-support-org-frontend.vercel.app/",
    github: "https://github.com/AhasnaCharumee/flood-support-org-backend",
  },
},
   {
  id: 13,
  title: "Uber driver app clone",
  description: "My current project .clone Uber driver app using React Native for cross-platform compatibility. The app features real-time ride requests, GPS navigation, and driver earnings tracking. Integrated with Firebase for backend services, it ensures seamless user authentication and data management. The UI is designed for ease of use, providing drivers with an efficient tool to manage their rides and maximize earnings.",
  image: "/uber.png",
  tags: ["React Native", "Expo", "Firebase", "Google Maps API", "TypeScript"],
  links: {
    live: "https://youtube.com/shorts/q4KAgt2gwjE",
    github: "https://github.com/AhasnaCharumee/Uber-Driver-App-BE",
  },
}

]

function ProjectGrid({ projects }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project: any) => (
        <div
          key={project.id}
          className="group bg-card rounded-lg border border-border overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg"
        >
          <div className="relative h-48 overflow-hidden bg-secondary">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-muted-foreground text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary rounded-full text-xs text-accent border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 border-t border-border">
              <a
                href={project.links.live}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded text-sm font-medium transition-colors"
              >
                <ExternalLink size={16} /> Live
              </a>

              <a
                href={project.links.github}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent/10 rounded text-sm font-medium transition-colors"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ---------------------------
// 📌 MAIN EXPORT COMPONENT
// ---------------------------
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Academic Projects */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Academic Projects</h2>
          <p className="text-muted-foreground">Some of the major university & institute projects I have built</p>
          <ProjectGrid projects={academicProjects} />
        </div>

        {/* My Projects */}
        <div className="space-y-8 pt-10">
          <h2 className="text-4xl font-bold">My Personal Projects</h2>
          <p className="text-muted-foreground">Real-world applications I developed using modern technologies</p>
          <ProjectGrid projects={myProjects} />
        </div>

      </div>
    </section>
  )
}