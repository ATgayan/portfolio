"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Home,
  User,
  Code,
  Briefcase,
  BookOpen,
  GraduationCap,
  Share2,
  Trash2,
  Edit,
  Save,
  LogOut,
  Github,
  Linkedin,
  Globe,
} from "lucide-react"
import {
  getData,
  updateProfile,
  addProject,
  updateProject,
  deleteProject,
  updateTechnologies,
  updateHobbies,
  updateEducation,
  updateSocials,
  type TechType,
  type HobbyType,
  type EducationType,
  type SocialType,
} from "@/lib/data"
import type { ProjectType } from "@/components/project-dialog"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const initialData = getData()
  const [data, setData] = useState(initialData)

  // Profile state
  const [profile, setProfile] = useState(data.profile)

  // Projects state
  const [projects, setProjects] = useState<ProjectType[]>(data.projects)
  const [editingProject, setEditingProject] = useState<ProjectType | null>(null)
  const [newProject, setNewProject] = useState<Omit<ProjectType, "id">>({
    title: "",
    description: "",
    longDescription: "",
    tags: [],
    image: "/placeholder.svg?height=450&width=800",
    demoLink: "",
    githubLink: "",
  })

  // Technologies state
  const [technologies, setTechnologies] = useState<TechType[]>(data.technologies)
  const [editingTech, setEditingTech] = useState<TechType | null>(null)
  const [newTech, setNewTech] = useState<Omit<TechType, "id">>({
    name: "",
    icon: "/placeholder.svg?height=40&width=40",
    description: "",
  })

  // Hobbies state
  const [hobbies, setHobbies] = useState<HobbyType[]>(data.hobbies)
  const [editingHobby, setEditingHobby] = useState<HobbyType | null>(null)
  const [newHobby, setNewHobby] = useState<Omit<HobbyType, "id">>({
    name: "",
    emoji: "🎯",
    description: "",
  })

  // Education state
  const [education, setEducation] = useState<EducationType[]>(data.education)
  const [editingEducation, setEditingEducation] = useState<EducationType | null>(null)
  const [newEducation, setNewEducation] = useState<Omit<EducationType, "id">>({
    year: "",
    title: "",
    institution: "",
    description: "",
  })

  // Socials state
  const [socials, setSocials] = useState<SocialType[]>(data.socials)
  const [editingSocial, setEditingSocial] = useState<SocialType | null>(null)
  const [newSocial, setNewSocial] = useState<Omit<SocialType, "id">>({
    name: "",
    icon: "Link",
    url: "",
  })

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("isAuthenticated")
    if (auth !== "true") {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/admin/login")
  }

  // Profile handlers
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const saveProfile = () => {
    updateProfile(profile)
    setData(getData())
  }

  // Project handlers
  const handleProjectChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isEditing: boolean) => {
    const { name, value } = e.target

    if (isEditing && editingProject) {
      setEditingProject((prev) => (prev ? { ...prev, [name]: value } : null))
    } else {
      setNewProject((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleProjectTagsChange = (e: React.ChangeEvent<HTMLInputElement>, isEditing: boolean) => {
    const { value } = e.target
    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag)

    if (isEditing && editingProject) {
      setEditingProject((prev) => (prev ? { ...prev, tags } : null))
    } else {
      setNewProject((prev) => ({ ...prev, tags }))
    }
  }

  const saveProject = () => {
    if (editingProject) {
      updateProject(editingProject)
      setEditingProject(null)
    } else {
      addProject(newProject)
      setNewProject({
        title: "",
        description: "",
        longDescription: "",
        tags: [],
        image: "/placeholder.svg?height=450&width=800",
        demoLink: "",
        githubLink: "",
      })
    }
    setProjects(getData().projects)
  }

  const removeProject = (id: number) => {
    deleteProject(id)
    setProjects(getData().projects)
  }

  // Technology handlers
  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isEditing: boolean) => {
    const { name, value } = e.target

    if (isEditing && editingTech) {
      setEditingTech((prev) => (prev ? { ...prev, [name]: value } : null))
    } else {
      setNewTech((prev) => ({ ...prev, [name]: value }))
    }
  }

  const saveTech = () => {
    let updatedTechs: TechType[]

    if (editingTech) {
      updatedTechs = technologies.map((tech) => (tech.id === editingTech.id ? editingTech : tech))
      setEditingTech(null)
    } else {
      const newId = Math.max(0, ...technologies.map((t) => t.id)) + 1
      updatedTechs = [...technologies, { ...newTech, id: newId }]
      setNewTech({
        name: "",
        icon: "/placeholder.svg?height=40&width=40",
        description: "",
      })
    }

    setTechnologies(updatedTechs)
    updateTechnologies(updatedTechs)
  }

  const removeTech = (id: number) => {
    const updatedTechs = technologies.filter((tech) => tech.id !== id)
    setTechnologies(updatedTechs)
    updateTechnologies(updatedTechs)
  }

  // Hobby handlers
  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isEditing: boolean) => {
    const { name, value } = e.target

    if (isEditing && editingHobby) {
      setEditingHobby((prev) => (prev ? { ...prev, [name]: value } : null))
    } else {
      setNewHobby((prev) => ({ ...prev, [name]: value }))
    }
  }

  const saveHobby = () => {
    let updatedHobbies: HobbyType[]

    if (editingHobby) {
      updatedHobbies = hobbies.map((hobby) => (hobby.id === editingHobby.id ? editingHobby : hobby))
      setEditingHobby(null)
    } else {
      const newId = Math.max(0, ...hobbies.map((h) => h.id)) + 1
      updatedHobbies = [...hobbies, { ...newHobby, id: newId }]
      setNewHobby({
        name: "",
        emoji: "🎯",
        description: "",
      })
    }

    setHobbies(updatedHobbies)
    updateHobbies(updatedHobbies)
  }

  const removeHobby = (id: number) => {
    const updatedHobbies = hobbies.filter((hobby) => hobby.id !== id)
    setHobbies(updatedHobbies)
    updateHobbies(updatedHobbies)
  }

  // Education handlers
  const handleEducationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isEditing: boolean) => {
    const { name, value } = e.target

    if (isEditing && editingEducation) {
      setEditingEducation((prev) => (prev ? { ...prev, [name]: value } : null))
    } else {
      setNewEducation((prev) => ({ ...prev, [name]: value }))
    }
  }

  const saveEducation = () => {
    let updatedEducation: EducationType[]

    if (editingEducation) {
      updatedEducation = education.map((edu) => (edu.id === editingEducation.id ? editingEducation : edu))
      setEditingEducation(null)
    } else {
      const newId = Math.max(0, ...education.map((e) => e.id)) + 1
      updatedEducation = [...education, { ...newEducation, id: newId }]
      setNewEducation({
        year: "",
        title: "",
        institution: "",
        description: "",
      })
    }

    setEducation(updatedEducation)
    updateEducation(updatedEducation)
  }

  const removeEducation = (id: number) => {
    const updatedEducation = education.filter((edu) => edu.id !== id)
    setEducation(updatedEducation)
    updateEducation(updatedEducation)
  }

  // Social handlers
  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, isEditing: boolean) => {
    const { name, value } = e.target

    if (isEditing && editingSocial) {
      setEditingSocial((prev) => (prev ? { ...prev, [name]: value } : null))
    } else {
      setNewSocial((prev) => ({ ...prev, [name]: value }))
    }
  }

  const saveSocial = () => {
    let updatedSocials: SocialType[]

    if (editingSocial) {
      updatedSocials = socials.map((social) => (social.id === editingSocial.id ? editingSocial : social))
      setEditingSocial(null)
    } else {
      const newId = Math.max(0, ...socials.map((s) => s.id)) + 1
      updatedSocials = [...socials, { ...newSocial, id: newId }]
      setNewSocial({
        name: "",
        icon: "Link",
        url: "",
      })
    }

    setSocials(updatedSocials)
    updateSocials(updatedSocials)
  }

  const removeSocial = (id: number) => {
    const updatedSocials = socials.filter((social) => social.id !== id)
    setSocials(updatedSocials)
    updateSocials(updatedSocials)
  }

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-teal-300 text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-black/80 backdrop-blur-sm border-b border-teal-300/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-teal-300">Admin Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-teal-300/50 text-teal-300" asChild>
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                View Site
              </Link>
            </Button>
            <Button variant="outline" className="border-teal-300/50 text-teal-300" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="profile" className="data-[state=active]:bg-teal-300 data-[state=active]:text-black">
              <User className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Profile</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-teal-300 data-[state=active]:text-black">
              <Briefcase className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Projects</span>
            </TabsTrigger>
            <TabsTrigger
              value="technologies"
              className="data-[state=active]:bg-teal-300 data-[state=active]:text-black"
            >
              <Code className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Technologies</span>
            </TabsTrigger>
            <TabsTrigger value="hobbies" className="data-[state=active]:bg-teal-300 data-[state=active]:text-black">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Hobbies</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-teal-300 data-[state=active]:text-black">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="socials" className="data-[state=active]:bg-teal-300 data-[state=active]:text-black">
              <Share2 className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Socials</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="bg-black/50 border-teal-300/20">
              <CardHeader>
                <CardTitle className="text-teal-300">Profile Information</CardTitle>
                <CardDescription>Update your personal information and profile image</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3 flex flex-col items-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-teal-300/30 mb-4">
                      <Image
                        src={profile.image || "/placeholder.svg"}
                        alt="Profile"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="image">Profile Image URL</Label>
                      <Input
                        id="image"
                        name="image"
                        value={profile.image}
                        onChange={handleProfileChange}
                        className="bg-white/5 border-teal-300/20"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleProfileChange}
                        className="bg-white/5 border-teal-300/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tagline">Tagline</Label>
                      <Input
                        id="tagline"
                        name="tagline"
                        value={profile.tagline}
                        onChange={handleProfileChange}
                        className="bg-white/5 border-teal-300/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="intro">Short Introduction</Label>
                      <Textarea
                        id="intro"
                        name="intro"
                        value={profile.intro}
                        onChange={handleProfileChange}
                        className="bg-white/5 border-teal-300/20 min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="about">About Me</Label>
                      <Textarea
                        id="about"
                        name="about"
                        value={profile.about}
                        onChange={handleProfileChange}
                        className="bg-white/5 border-teal-300/20 min-h-[150px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvUrl">CV/Resume URL</Label>
                      <Input
                        id="cvUrl"
                        name="cvUrl"
                        value={profile.cvUrl}
                        onChange={handleProfileChange}
                        placeholder="https://example.com/your-cv.pdf"
                        className="bg-white/5 border-teal-300/20"
                      />
                      <p className="text-xs text-gray-400">
                        Enter the URL to your CV/resume file (PDF recommended). This will be used for the download
                        button on your portfolio.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button onClick={saveProfile} className="bg-teal-300 hover:bg-teal-400 text-black">
                    <Save className="h-4 w-4 mr-2" />
                    Save Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card className="bg-black/50 border-teal-300/20 mb-6">
              <CardHeader>
                <CardTitle className="text-teal-300">
                  {editingProject ? `Edit Project: ${editingProject.title}` : "Add New Project"}
                </CardTitle>
                <CardDescription>
                  {editingProject ? "Update project details" : "Create a new project to showcase in your portfolio"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input
                      id="title"
                      name="title"
                      value={editingProject ? editingProject.title : newProject.title}
                      onChange={(e) => handleProjectChange(e, !!editingProject)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Short Description</Label>
                    <Input
                      id="description"
                      name="description"
                      value={editingProject ? editingProject.description : newProject.description}
                      onChange={(e) => handleProjectChange(e, !!editingProject)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="longDescription">Detailed Description</Label>
                  <Textarea
                    id="longDescription"
                    name="longDescription"
                    value={editingProject ? editingProject.longDescription : newProject.longDescription}
                    onChange={(e) => handleProjectChange(e, !!editingProject)}
                    className="bg-white/5 border-teal-300/20 min-h-[150px]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input
                      id="image"
                      name="image"
                      value={editingProject ? editingProject.image : newProject.image}
                      onChange={(e) => handleProjectChange(e, !!editingProject)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Technologies (comma separated)</Label>
                    <Input
                      id="tags"
                      name="tags"
                      value={editingProject ? editingProject.tags.join(", ") : newProject.tags.join(", ")}
                      onChange={(e) => handleProjectTagsChange(e, !!editingProject)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="demoLink">Demo Link (optional)</Label>
                    <Input
                      id="demoLink"
                      name="demoLink"
                      value={editingProject ? editingProject.demoLink || "" : newProject.demoLink || ""}
                      onChange={(e) => handleProjectChange(e, !!editingProject)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="githubLink">GitHub Link (optional)</Label>
                    <Input
                      id="githubLink"
                      name="githubLink"
                      value={editingProject ? editingProject.githubLink || "" : newProject.githubLink || ""}
                      onChange={(e) => handleProjectChange(e, !!editingProject)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  {editingProject && (
                    <Button
                      variant="outline"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingProject(null)}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button onClick={saveProject} className="bg-teal-300 hover:bg-teal-400 text-black">
                    <Save className="h-4 w-4 mr-2" />
                    {editingProject ? "Update Project" : "Add Project"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id} className="bg-black/50 border-teal-300/20">
                  <div className="h-40 overflow-hidden border-b border-teal-300/20">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-teal-300">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-300 line-clamp-2">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-teal-300/20 text-teal-300 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="bg-teal-300/20 text-teal-300 text-xs px-2 py-1 rounded">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>
                  <div className="px-6 pb-6 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingProject(project)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500/50 text-red-500"
                      onClick={() => removeProject(project.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Technologies Tab */}
          <TabsContent value="technologies">
            <Card className="bg-black/50 border-teal-300/20 mb-6">
              <CardHeader>
                <CardTitle className="text-teal-300">
                  {editingTech ? `Edit Technology: ${editingTech.name}` : "Add New Technology"}
                </CardTitle>
                <CardDescription>
                  {editingTech ? "Update technology details" : "Add a new technology to your skills section"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="techName">Technology Name</Label>
                    <Input
                      id="techName"
                      name="name"
                      value={editingTech ? editingTech.name : newTech.name}
                      onChange={(e) => handleTechChange(e, !!editingTech)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="techIcon">Icon URL</Label>
                    <Input
                      id="techIcon"
                      name="icon"
                      value={editingTech ? editingTech.icon : newTech.icon}
                      onChange={(e) => handleTechChange(e, !!editingTech)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="techDescription">Description</Label>
                  <Textarea
                    id="techDescription"
                    name="description"
                    value={editingTech ? editingTech.description : newTech.description}
                    onChange={(e) => handleTechChange(e, !!editingTech)}
                    className="bg-white/5 border-teal-300/20"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  {editingTech && (
                    <Button
                      variant="outline"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingTech(null)}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button onClick={saveTech} className="bg-teal-300 hover:bg-teal-400 text-black">
                    <Save className="h-4 w-4 mr-2" />
                    {editingTech ? "Update Technology" : "Add Technology"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <Card key={tech.id} className="bg-black/50 border-teal-300/20">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-black/50 border border-teal-300/30 flex items-center justify-center">
                        <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} width={24} height={24} />
                      </div>
                      <CardTitle className="text-teal-300">{tech.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-300">{tech.description}</p>
                  </CardContent>
                  <div className="px-6 pb-6 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingTech(tech)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500/50 text-red-500"
                      onClick={() => removeTech(tech.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Hobbies Tab */}
          <TabsContent value="hobbies">
            <Card className="bg-black/50 border-teal-300/20 mb-6">
              <CardHeader>
                <CardTitle className="text-teal-300">
                  {editingHobby ? `Edit Hobby: ${editingHobby.name}` : "Add New Hobby"}
                </CardTitle>
                <CardDescription>
                  {editingHobby ? "Update hobby details" : "Add a new hobby to your 'What I Do For Fun' section"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hobbyName">Hobby Name</Label>
                    <Input
                      id="hobbyName"
                      name="name"
                      value={editingHobby ? editingHobby.name : newHobby.name}
                      onChange={(e) => handleHobbyChange(e, !!editingHobby)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hobbyEmoji">Emoji</Label>
                    <Input
                      id="hobbyEmoji"
                      name="emoji"
                      value={editingHobby ? editingHobby.emoji : newHobby.emoji}
                      onChange={(e) => handleHobbyChange(e, !!editingHobby)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hobbyDescription">Description</Label>
                  <Textarea
                    id="hobbyDescription"
                    name="description"
                    value={editingHobby ? editingHobby.description : newHobby.description}
                    onChange={(e) => handleHobbyChange(e, !!editingHobby)}
                    className="bg-white/5 border-teal-300/20"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  {editingHobby && (
                    <Button
                      variant="outline"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingHobby(null)}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button onClick={saveHobby} className="bg-teal-300 hover:bg-teal-400 text-black">
                    <Save className="h-4 w-4 mr-2" />
                    {editingHobby ? "Update Hobby" : "Add Hobby"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby) => (
                <Card key={hobby.id} className="bg-black/50 border-teal-300/20">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-black/50 border border-teal-300/30 flex items-center justify-center">
                        <span className="text-2xl">{hobby.emoji}</span>
                      </div>
                      <CardTitle className="text-teal-300">{hobby.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-300">{hobby.description}</p>
                  </CardContent>
                  <div className="px-6 pb-6 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingHobby(hobby)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500/50 text-red-500"
                      onClick={() => removeHobby(hobby.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <Card className="bg-black/50 border-teal-300/20 mb-6">
              <CardHeader>
                <CardTitle className="text-teal-300">
                  {editingEducation ? `Edit Education: ${editingEducation.title}` : "Add New Education"}
                </CardTitle>
                <CardDescription>
                  {editingEducation ? "Update education details" : "Add a new education entry to your timeline"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eduYear">Year</Label>
                    <Input
                      id="eduYear"
                      name="year"
                      value={editingEducation ? editingEducation.year : newEducation.year}
                      onChange={(e) => handleEducationChange(e, !!editingEducation)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eduTitle">Title/Degree</Label>
                    <Input
                      id="eduTitle"
                      name="title"
                      value={editingEducation ? editingEducation.title : newEducation.title}
                      onChange={(e) => handleEducationChange(e, !!editingEducation)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eduInstitution">Institution</Label>
                  <Input
                    id="eduInstitution"
                    name="institution"
                    value={editingEducation ? editingEducation.institution : newEducation.institution}
                    onChange={(e) => handleEducationChange(e, !!editingEducation)}
                    className="bg-white/5 border-teal-300/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="eduDescription">Description</Label>
                  <Textarea
                    id="eduDescription"
                    name="description"
                    value={editingEducation ? editingEducation.description : newEducation.description}
                    onChange={(e) => handleEducationChange(e, !!editingEducation)}
                    className="bg-white/5 border-teal-300/20"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  {editingEducation && (
                    <Button
                      variant="outline"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingEducation(null)}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button onClick={saveEducation} className="bg-teal-300 hover:bg-teal-400 text-black">
                    <Save className="h-4 w-4 mr-2" />
                    {editingEducation ? "Update Education" : "Add Education"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="bg-black/50 border-teal-300/20">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full bg-black/50 border border-teal-300/30 flex items-center justify-center shrink-0">
                        <span className="text-teal-300 font-bold">{edu.year}</span>
                      </div>
                      <div>
                        <CardTitle className="text-teal-300">{edu.title}</CardTitle>
                        <CardDescription>{edu.institution}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-gray-300">{edu.description}</p>
                  </CardContent>
                  <div className="px-6 pb-6 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingEducation(edu)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500/50 text-red-500"
                      onClick={() => removeEducation(edu.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Socials Tab */}
          <TabsContent value="socials">
            <Card className="bg-black/50 border-teal-300/20 mb-6">
              <CardHeader>
                <CardTitle className="text-teal-300">
                  {editingSocial ? `Edit Social: ${editingSocial.name}` : "Add New Social Media"}
                </CardTitle>
                <CardDescription>
                  {editingSocial ? "Update social media details" : "Add a new social media link to your portfolio"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="socialName">Platform Name</Label>
                    <Input
                      id="socialName"
                      name="name"
                      value={editingSocial ? editingSocial.name : newSocial.name}
                      onChange={(e) => handleSocialChange(e, !!editingSocial)}
                      className="bg-white/5 border-teal-300/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="socialIcon">Icon</Label>
                    <select
                      id="socialIcon"
                      name="icon"
                      value={editingSocial ? editingSocial.icon : newSocial.icon}
                      onChange={(e) => handleSocialChange(e, !!editingSocial)}
                      className="w-full h-10 px-3 py-2 bg-white/5 border border-teal-300/20 rounded-md text-white"
                    >
                      <option value="Github">GitHub</option>
                      <option value="Linkedin">LinkedIn</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Youtube">YouTube</option>
                      <option value="Globe">Website</option>
                      <option value="Mail">Email</option>
                      <option value="Link">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="socialUrl">URL</Label>
                  <Input
                    id="socialUrl"
                    name="url"
                    value={editingSocial ? editingSocial.url : newSocial.url}
                    onChange={(e) => handleSocialChange(e, !!editingSocial)}
                    className="bg-white/5 border-teal-300/20"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  {editingSocial && (
                    <Button
                      variant="outline"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingSocial(null)}
                    >
                      Cancel
                    </Button>
                  )}
                  <Button onClick={saveSocial} className="bg-teal-300 hover:bg-teal-400 text-black">
                    <Save className="h-4 w-4 mr-2" />
                    {editingSocial ? "Update Social" : "Add Social"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socials.map((social) => (
                <Card key={social.id} className="bg-black/50 border-teal-300/20">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-black/50 border border-teal-300/30 flex items-center justify-center">
                        {social.icon === "Github" && <Github className="h-6 w-6 text-teal-300" />}
                        {social.icon === "Linkedin" && <Linkedin className="h-6 w-6 text-teal-300" />}
                        {social.icon === "Twitter" && (
                          <svg
                            className="h-6 w-6 text-teal-300"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        )}
                        {social.icon === "Instagram" && (
                          <svg
                            className="h-6 w-6 text-teal-300"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        )}
                        {social.icon === "Facebook" && (
                          <svg
                            className="h-6 w-6 text-teal-300"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        )}
                        {social.icon === "Youtube" && (
                          <svg
                            className="h-6 w-6 text-teal-300"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                          </svg>
                        )}
                        {social.icon === "Globe" && <Globe className="h-6 w-6 text-teal-300" />}
                        {social.icon === "Mail" && (
                          <svg
                            className="h-6 w-6 text-teal-300"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        )}
                        {social.icon === "Link" && (
                          <svg
                            className="h-6 w-6 text-teal-300"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </svg>
                        )}
                      </div>
                      <CardTitle className="text-teal-300">{social.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-teal-300 break-all"
                    >
                      {social.url}
                    </a>
                  </CardContent>
                  <div className="px-6 pb-6 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-300/50 text-teal-300"
                      onClick={() => setEditingSocial(social)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-500/50 text-red-500"
                      onClick={() => removeSocial(social.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
