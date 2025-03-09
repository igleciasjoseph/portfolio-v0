import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import NavLinks from "./components/nav-links"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background py-4">
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-6">
          <div className="flex items-center">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold px-3 py-2">Joseph Iglecias</span>
            </Link>
            <div className="hidden md:flex">
              <NavLinks />
            </div>
          </div>
          <a href="/igleciasjoseph.pdf" download="igleciasjoseph.pdf">
            <Button variant="outline">Download Resume</Button>
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6">
        <section 
          id="about" 
          className="py-12 md:py-24 lg:py-32"
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Avatar className="h-40 w-40 mb-4">
              <AvatarImage src="/selfieFavicon.jpg" alt="Profile" className="object-cover" />
              <AvatarFallback>JI</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                iOS Developer
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Results-driven iOS Engineer with years of experience developing and testing high-performance,
                user-centric applications for the Apple ecosystem
              </p>
            </div>
            <div className="space-x-4">
              <Link href="https://github.com/igleciasjoseph" target="_blank">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/igleciasjoseph/" target="_blank">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/josephatspottr" target="_blank">
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:igleciasjoseph@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section 
          id="projects" 
          className="py-8 md:py-16 lg:py-24"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Spottr"
              caption="A social media platform for car enthusiasts to discover, share, and map rare car sightings in real time."
              description={[
                "Real-time car spotting with location tracking",
                "Social features including likes, comments, and follows",
                "Interactive map showing nearby spots",
                "Push notifications for new spots in your area"
              ]}
              image="/fullTextLogoDarkMode.svg?height=400&width=600"
              link="https://apps.apple.com/us/app/spottr-the-car-spotting-app/id6741741425"
              tags={["SwiftUI", "Node.js", "Express.js", "PostgreSQL"]}
              icon="appstore"
            />
            <ProjectCard
              title="Chronos"
              caption="A modern time management app with a built-in calendar, designed for efficient task organization with iCloud sync."
              description={[
                "Vibrant and modern UI",
                "Calendar integration with iCloud sync across all devices",
                "Task management with priority levels",
                "Time tracking and productivity metrics"
              ]}
              image="/logoTransparentBG.png?height=400&width=600"
              link="https://github.com/igleciasjoseph/ChronosWhite"
              tags={["SwiftUI", "SwiftData", "iCloud"]}
              icon="github"
            />
            <ProjectCard
              title="Vinyl"
              caption="A modern take on vinyl music by playing any songs with a rotating vinyl"
              description={[
                "Works with any Apple Music song",
                "Play any songs with a rotating vinyl through Apple Music",
                "MusicKit integration for Apple Music",
                "SwiftUI and UIKit"
              ]}
              image="/vinylDiscTwo.png?height=400&width=600"
              link="https://github.com/igleciasjoseph/VinylMusic"
              tags={["SwiftUI", "MusicKit", "UIKit"]}
              icon="github"
            />
          </div>
        </section>

        <section 
          className="py-12 md:py-24 lg:py-32"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Tech Stack</h2>
          <TechStack />
        </section>

        {/* <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </section> */}
      </main>

      <footer className="border-t">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Joseph Iglecias. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

