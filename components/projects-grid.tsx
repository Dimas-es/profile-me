import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      title: "Apricot Designs iOS App",
      category: "UI Design, UX Design",
      description:
        "I designed an app for pharmaceutical lab equipment company Apricot Design's Personal Pipettor. This app is available on the App Store for iOS devices.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Illustrator", "Sketch"],
    },
    {
      id: 2,
      title: "Dance Portraits",
      category: "Photography, Art Direction",
      description:
        "I think dancers are the most striking human beings. There is so much artistry and athleticism in the way they move and express themselves. I want to build portraits of these dancers as athletes, artists, and women.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Photoshop", "Lightroom"],
    },
  ]

  const teamProjects = [
    {
      id: 3,
      title: "Rowkin Branding Visuals",
      role: "Art Direction, Photography",
      description:
        "The project is to transform Rowkin from a technology-focused consumer electronics company to a lifestyle brand.",
      image: "/placeholder.svg?height=200&width=300",
      team: [
        { name: "Minji Lee", role: "Designer" },
        { name: "Nelson Glendinning", role: "Designer" },
      ],
    },
    {
      id: 4,
      title: "First Assist App",
      role: "UI Design, UX Design",
      description:
        "For FirstNET's Public Safety Hackathon, we built an app that helps people with mobility disabilities connect to first responders during a fire incident.",
      image: "/placeholder.svg?height=200&width=300",
      team: [{ name: "Gia Cheng", role: "UI/UX Designer" }],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{"Sophia's Projects"}</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search" className="pl-10 w-64" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <Link href={`/project/${project.id}`}>
                <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors">{project.title}</h3>
              </Link>
              <p className="text-blue-600 text-sm font-medium mt-1">{project.category}</p>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline">Visit Website</Button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Team Projects</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-10 w-64" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-blue-600 text-sm font-medium mt-1">Role: {project.role}</p>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <div className="mt-4">
                  <h4 className="font-medium text-sm mb-2">Team</h4>
                  <div className="space-y-1">
                    {project.team.map((member, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <div>
                          <p className="text-sm font-medium">{member.name}</p>
                          <p className="text-xs text-gray-500">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
