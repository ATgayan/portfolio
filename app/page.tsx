"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Globe,
  ChevronDown,
  Send,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  FileText,
  Download,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"
import { ProjectDialog, type ProjectType } from "@/components/project-dialog"
import { ContactDialog } from "@/components/contact-dialog"
import { TechIcon } from "@/components/tech-icon"
import { getData } from "@/lib/data"

export default function Home() {
  const data = getData()
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
  const [isContactOpen, setIsContactOpen] = useState(false)

  const openProjectDialog = (project: ProjectType) => {
    setSelectedProject(project)
  }

  const closeProjectDialog = () => {
    setSelectedProject(null)
  }

  const openContactDialog = () => {
    setIsContactOpen(true)
  }

  const closeContactDialog = () => {
    setIsContactOpen(false)
  }

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "Github":
        return <Github className="h-5 w-5" />
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />
      case "Twitter":
        return <Twitter className="h-5 w-5" />
      case "Instagram":
        return <Instagram className="h-5 w-5" />
      case "Facebook":
        return <Facebook className="h-5 w-5" />
      case "Youtube":
        return <Youtube className="h-5 w-5" />
      case "Globe":
        return <Globe className="h-5 w-5" />
      case "Mail":
        return <Mail className="h-5 w-5" />
      default:
        return <Globe className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-teal-300/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-white">
            <span className="text-teal-300">Portfolio.</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#home" className="text-white hover:text-teal-300 transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-teal-300 transition-colors">
              About Me
            </Link>
            <Link href="#technologies" className="text-white hover:text-teal-300 transition-colors">
              Technologies
            </Link>
            <Link href="#projects" className="text-white hover:text-teal-300 transition-colors">
              Projects
            </Link>
            <Link href="#hobbies" className="text-white hover:text-teal-300 transition-colors">
              Hobbies
            </Link>
            <Link href="#education" className="text-white hover:text-teal-300 transition-colors">
              Education
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              onClick={openContactDialog}
              variant="outline"
              className="hidden md:flex items-center gap-2 border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-black"
            >
              <Send className="h-4 w-4" />
              Contact Me
            </Button>
            <Link href="/admin/login" className="hidden md:block">
              <Button variant="ghost" className="text-teal-300 hover:text-teal-100">
                Admin
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-teal-300">{data.profile.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-6">{data.profile.tagline}</p>
              <p className="text-gray-300 mb-8 max-w-lg">{data.profile.intro}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-teal-300 hover:bg-teal-400 text-black font-medium px-6 py-3 rounded-md transition-all transform hover:scale-105">
                  <Link href="#projects">View My Projects</Link>
                </Button>
                <Button
                  onClick={openContactDialog}
                  variant="outline"
                  className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-black px-6 py-3 rounded-md transition-all transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Contact Me
                  </span>
                </Button>
                {data.profile.cvUrl && (
                  <Button
                    variant="outline"
                    className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-black px-6 py-3 rounded-md transition-all transform hover:scale-105"
                    asChild
                  >
                    <a href={data.profile.cvUrl} target="_blank" rel="noopener noreferrer" download>
                      <span className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download CV
                      </span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-teal-300 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-teal-300 relative">
                    <Image
                      src={data.profile.image || "/placeholder.svg"}
                      alt={data.profile.name}
                      width={400}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link href="#about" className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-teal-300" />
            </Link>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About <span className="text-teal-300">Me</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              {data.profile.about.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-lg leading-relaxed mt-6">
                  {paragraph}
                </p>
              ))}

              {data.profile.cvUrl && (
                <div className="mt-8 flex justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-black"
                    asChild
                  >
                    <a href={data.profile.cvUrl} target="_blank" rel="noopener noreferrer" download>
                      <span className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        View My Resume
                      </span>
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technologies <span className="text-teal-300">I Use</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
              {data.technologies.map((tech) => (
                <TechIcon
                  key={tech.id}
                  name={tech.name}
                  icon={tech.icon}
                  color="bg-black/50 border border-teal-300/30"
                />
              ))}
            </div>

            <div className="mt-16 max-w-3xl mx-auto bg-white/5 border border-teal-300/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-300">My Tech Stack</h3>
              <p className="text-gray-300 mb-4">
                I specialize in modern web and mobile development technologies. My expertise includes:
              </p>
              <ul className="space-y-2 text-gray-300">
                {data.technologies.map((tech) => (
                  <li key={tech.id} className="flex items-start">
                    <span className="text-teal-300 mr-2">•</span>
                    <span>
                      <strong className="text-teal-300">{tech.name}</strong> - {tech.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              My <span className="text-teal-300">Projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((project) => (
                <Card
                  key={project.id}
                  className="bg-black/50 border-teal-300/20 hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openProjectDialog(project)}
                >
                  <div className="h-48 overflow-hidden border-b border-teal-300/20">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-teal-300">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 line-clamp-3">{project.longDescription}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-teal-300/20 text-teal-300 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-teal-300/20 text-teal-300 text-xs px-2 py-1 rounded">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What I Do <span className="text-teal-300">For Fun</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {data.hobbies.map((hobby) => (
                <div
                  key={hobby.id}
                  className="bg-black/50 p-6 rounded-lg border border-teal-300/20 hover:border-teal-300 transition-all duration-300 text-center"
                >
                  <div className="w-20 h-20 bg-teal-300/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">{hobby.emoji}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
                  <p className="text-gray-400">{hobby.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Education & <span className="text-teal-300">Certifications</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {data.education.map((edu) => (
                  <div key={edu.id} className="relative pl-8 border-l-2 border-teal-300">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-300"></div>
                    <div className="mb-1 text-teal-300 font-semibold">{edu.year}</div>
                    <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-teal-300/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-teal-300">{data.profile.name.split(" ")[0]}</span>{" "}
                {data.profile.name.split(" ").slice(1).join(" ")}
              </h2>
              <p className="text-gray-400 mt-2">{data.profile.tagline}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {data.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-300 hover:text-black transition-colors"
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} {data.profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Project Details Dialog */}
      {selectedProject && (
        <ProjectDialog project={selectedProject} isOpen={!!selectedProject} onClose={closeProjectDialog} />
      )}

      {/* Contact Dialog */}
      <ContactDialog isOpen={isContactOpen} onClose={closeContactDialog} />
    </div>
  )
}
