"use client"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export type ProjectType = {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  demoLink?: string
  githubLink?: string
}

interface ProjectDialogProps {
  project: ProjectType
  isOpen: boolean
  onClose: () => void
}

export function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black border-teal-300/20 max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-teal-300">{project.title}</DialogTitle>
          <DialogDescription className="text-gray-400">{project.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="rounded-lg overflow-hidden border border-teal-300/20 mb-6">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-teal-300/20 text-teal-300 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {project.demoLink && (
                <Button variant="outline" className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-black">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button variant="outline" className="border-teal-300 text-teal-300 hover:bg-teal-300 hover:text-black">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
