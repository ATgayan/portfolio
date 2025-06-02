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
    tagline: "Undergraduate ICT Student | Web Developer",
    image: "/placeholder.svg?height=400&width=400",
    intro:
      "Hi, I'm Thusitha Gayan, an undergraduate ICT student at Uva Wellassa University. Passionate about coding, creativity, and continuous learning.",
    about:
      "I'm currently studying Information and Communication Technology at Uva Wellassa University in Sri Lanka. I enjoy building web apps and learning new technologies. My journey in tech started with a curiosity about how websites work, which led me to pursue formal education in ICT.\n\nAs a web developer, I strive to create clean, efficient, and user-friendly applications. I'm constantly expanding my skill set and staying up-to-date with the latest industry trends.",
    cvUrl: "https://example.com/ThusithaGayan-CV.pdf", // Added CV URL field
  },
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack web application",
      longDescription:
        "A comprehensive e-commerce platform built with Next.js and Express. Features include user authentication, product catalog with filtering and search, shopping cart functionality, secure checkout process, and an admin dashboard for inventory management. The application uses MySQL for data storage and implements responsive design for optimal viewing on all devices.",
      tags: ["Next.js", "Express", "MySQL", "Tailwind CSS", "Redux"],
      image: "/placeholder.svg?height=450&width=800",
      demoLink: "https://example.com/ecommerce",
      githubLink: "https://github.com/ATgayan/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity tool",
      longDescription:
        "A task management application designed to help users organize their work efficiently. The app includes features such as task categorization, priority levels, due dates with reminders, progress tracking, and collaborative task sharing. Built with React for the web interface and React Native for the mobile app, ensuring a consistent experience across platforms. The backend is powered by Express with MySQL database.",
      tags: ["React", "React Native", "Express", "MySQL", "Tailwind CSS"],
      image: "/placeholder.svg?height=450&width=800",
      demoLink: "https://example.com/taskmanager",
      githubLink: "https://github.com/ATgayan/taskmanager",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Data visualization",
      longDescription:
        "An interactive weather dashboard that displays current and forecasted weather data with beautiful visualizations. The application fetches data from multiple weather APIs and presents it in an intuitive interface with interactive charts. Users can search for locations, save favorites, and view detailed weather information including temperature, humidity, wind speed, and precipitation forecasts. The dashboard is fully responsive and optimized for all devices.",
      tags: ["Next.js", "Tailwind CSS", "Chart.js", "API Integration"],
      image: "/placeholder.svg?height=450&width=800",
      demoLink: "https://example.com/weather",
      githubLink: "https://github.com/ATgayan/weather",
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
