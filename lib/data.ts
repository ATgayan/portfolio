import type { ProjectType } from "@/components/project-dialog"

export type TechType = {
  id: number
  name: string
  icon: string
  description: string
}

export type HobbyType = {
  id: number
  name: string
  emoji: string
  description: string
}

export type EducationType = {
  id: number
  year: string
  title: string
  institution: string
  description: string
}

export type SocialType = {
  id: number
  name: string
  icon: string
  url: string
}

// Initial data
export const initialData = {
  profile: {
    name: "Thusitha Gayan",
    tagline: "Undergraduate ICT Student | Fullstack Developer | Tech Enthusiast",
    image: "/images/profile_photo.jpg?height=400&width=400",
    intro:
      "Hi, I'm Thusitha Gayan, an undergraduate ICT student at Uva Wellassa University. Passionate about coding, creativity, and continuous learning.",
    about:
      "I'm currently studying Information and Communication Technology at Uva Wellassa University in Sri Lanka. I enjoy building web apps and learning new technologies. My journey in tech started with a curiosity about how websites work, which led me to pursue formal education in ICT.\n\nAs a web developer, I strive to create clean, efficient, and user-friendly applications. I'm constantly expanding my skill set and staying up-to-date with the latest industry trends.",
    cvUrl: "https://drive.google.com/file/d/1REM3HyqW_SG4VDObBqJ82JADQ7sieG1g/view?usp=sharing", // Added CV URL field
  },
  projects: [
    {
      id: 1,
      title: "Social media web app (linkora)",
      description: "Linkora – University Student Social Platform",
      longDescription:
        "Linkora is a campus-focused social networking platform built to help university students connect, collaborate, and grow. Designed with the needs of students in mind, it enables users to find like-minded peers based on skills, interests, and academic background.Students can share achievements, discover project partners, and build meaningful campus connections in a secure and interactive environment.",
      tags: ["Next.js", "Express", "firebase", "Tailwind CSS"],
      image: "/images/projects/linkora.png?height=450&width=800",
      demoLink: "https://linkora-frontend.vercel.app/",
      githubLink: "https://github.com/ATgayan/Linkora-be",
    },
    {
      id: 2,
      title: "invoice and quotation generator web app",
      description: "Productivity tool",
      longDescription:
        "This web application was developed on request for a mechanical engineering company to streamline their invoice and quotation processes. The system allows company staff to easily create, manage, and generate PDF quotations and invoices, improving accuracy and efficiency in daily operations.Built with scalability and real-world usability in mind, the app ensures that financial documents are generated consistently and stored securely.",
      tags: ["React", "Express", "firebase", "Tailwind CSS"],
      image: "/images/projects/QuantifyPro.png?height=450&width=800",
      demoLink: "",
      githubLink: "https://github.com/DilshanWA/Inquoto",
    },
    {
      id: 3,
      title: "Tiktok video downloader (Tiksavr)",
      description: "Download tool",
      longDescription:
        "TikSaver is a web-based tool that allows users to download TikTok videos without watermarks quickly and for free. Built with Next.js and integrated with a free public API, the app provides a clean and responsive user experience across devices.Designed for speed and simplicity, TikSaver helps users save and share their favorite TikTok content effortlessly.",
      tags: ["Next.js", "Tailwind CSS", "API Integration"],
      image: "/images/projects/tiksavr.png?height=450&width=800",
      demoLink: "https://tiksaver-ashy.vercel.app/",
      githubLink: "https://github.com/ATgayan/Tiksaver",
    },
  ] as ProjectType[],
  technologies: [
    {
      id: 1,
      name: "Next.js",
      icon: "/placeholder.svg?height=40&width=40",
      description: "For building fast, SEO-friendly React applications with server-side rendering",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      icon: "/placeholder.svg?height=40&width=40",
      description: "For rapid UI development with utility-first CSS",
    },
    {
      id: 3,
      name: "Express",
      icon: "/placeholder.svg?height=40&width=40",
      description: "For building robust backend APIs and server applications",
    },
    {
      id: 4,
      name: "React Native",
      icon: "/placeholder.svg?height=40&width=40",
      description: "For cross-platform mobile app development",
    },
    {
      id: 5,
      name: "MySQL",
      icon: "/placeholder.svg?height=40&width=40",
      description: "For reliable and scalable database solutions",
    },
  ] as TechType[],
  hobbies: [
    {
      id: 1,
      name: "Playing Guitar",
      emoji: "🎸",
      description: "I enjoy playing acoustic guitar in my free time, learning new songs and techniques.",
    },
    {
      id: 2,
      name: "Going to the Gym",
      emoji: "🏋️",
      description: "I'm committed to fitness and regularly work out at the gym to stay healthy and energized.",
    },
    {
      id: 3,
      name: "Reading",
      emoji: "📚",
      description: "I love reading books on technology, personal development, and science fiction.",
    },
  ] as HobbyType[],
  education: [
    {
      id: 1,
      year: "Present",
      title: "BSc in Information and Communication Technology",
      institution: "Uva Wellassa University, Sri Lanka",
      description: "Currently pursuing my bachelor's degree with a focus on web development and software engineering.",
    },
    {
      id: 2,
      year: "2022",
      title: "Web Development Diploma",
      institution: "DP Education",
      description:
        "Completed a comprehensive diploma program covering front-end and back-end web development technologies.",
    },
    {
      id: 3,
      year: "2021",
      title: "G.C.E Advanced Level",
      institution: "High School Education",
      description: "Successfully passed the G.C.E A/L examination with excellent results.",
    },
    {
      id: 4,
      year: "2020",
      title: "Python Programming Course",
      institution: "Online Certification",
      description: "Completed a comprehensive Python programming course covering fundamentals to advanced concepts.",
    },
  ] as EducationType[],
  socials: [
    {
      id: 1,
      name: "GitHub",
      icon: "Github",
      url: "https://github.com/ATgayan",
    },
    {
      id: 2,
      name: "Portfolio",
      icon: "Globe",
      url: "https://thusitha.me",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/thushitha-athukorale-848765248",
    },
    {
      id: 4,
      name: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com/thusithagayan",
    },
    {
      id: 5,
      name: "Instagram",
      icon: "Instagram",
      url: "https://instagram.com/thusithagayan",
    },
  ] as SocialType[],
}

// Client-side storage
const portfolioData = { ...initialData }

// Functions to get and update data
export function getData() {
  return portfolioData
}

export function updateProfile(profile: typeof portfolioData.profile) {
  portfolioData.profile = profile
  return portfolioData.profile
}

export function updateProjects(projects: ProjectType[]) {
  portfolioData.projects = projects
  return portfolioData.projects
}

export function addProject(project: Omit<ProjectType, "id">) {
  const newId = Math.max(0, ...portfolioData.projects.map((p) => p.id)) + 1
  const newProject = { ...project, id: newId }
  portfolioData.projects = [...portfolioData.projects, newProject]
  return newProject
}

export function updateProject(project: ProjectType) {
  portfolioData.projects = portfolioData.projects.map((p) => (p.id === project.id ? project : p))
  return project
}

export function deleteProject(id: number) {
  portfolioData.projects = portfolioData.projects.filter((p) => p.id !== id)
  return id
}

export function updateTechnologies(technologies: TechType[]) {
  portfolioData.technologies = technologies
  return portfolioData.technologies
}

export function updateHobbies(hobbies: HobbyType[]) {
  portfolioData.hobbies = hobbies
  return portfolioData.hobbies
}

export function updateEducation(education: EducationType[]) {
  portfolioData.education = education
  return portfolioData.education
}

export function updateSocials(socials: SocialType[]) {
  portfolioData.socials = socials
  return portfolioData.socials
}

// Authentication (mock)
export function authenticate(username: string, password: string) {
  // In a real app, you would validate against a database
  // This is just a simple mock for demonstration
  return username === "admin" && password === "password"
}
