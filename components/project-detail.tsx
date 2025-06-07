import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function ProjectDetail() {
  const teamMembers = [
    { name: "Gia Cheng", role: "Visual Designer", avatar: "GC" },
    { name: "Ahmad Usama", role: "Computer Science Student", avatar: "AU" },
  ]

  const skills = ["Photoshop", "Illustrator", "Figma", "Product Design", "Sketch", "UX Design"]

  const moreProjects = [
    {
      title: "Apricot Designs iOS App",
      category: "UI Design, UX Design",
      description:
        "I designed an app for pharmaceutical lab equipment company Apricot Design's Personal Pipettor. This app is available on the App Store for iOS devices.",
      tags: ["Illustrator", "Sketch"],
    },
    {
      title: "Dance Portraits",
      category: "Photography, Art Direction",
      description:
        "I think dancers are the most striking human beings. There is so much artistry and athleticism in the way they move and express themselves. I want to build portraits of these dancers as athletes, artists, and women.",
      tags: ["Photoshop", "Lightroom"],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2 text-gray-600">
        <ChevronLeft className="w-4 h-4" />
        <Link href="/" className="text-sm hover:text-blue-600">
          Back to Project List
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">First Assist: Award Winning Public Safety App</h1>
            <p className="text-blue-600 font-medium">UI Design, UX Design</p>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">
              For FirstNET's Public Safety Hackathon, we wanted to build an app that helps people with mobility
              disabilities connect to first responders during a fire incident. The web app creates an efficient database
              and interface for the fire department to be alerted and access the information of people who might need
              assistance during a fire incident.
            </p>
            <p className="text-gray-600">
              When a fire alarm goes off, the app automatically collects the user's location and personal data, which is
              sent to the fire department. The app then runs in the background on a phone, and turns on when there is a
              fire alarm. It sends a message to the fire department that certain app users (individuals with
              disabilities) might in danger.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="First Assist App Interface"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="First Assist App Mobile View"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Project Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">Project Role: {member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Skills Demonstrated</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Browse More Projects</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-10 w-64" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moreProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/placeholder.svg?height=200&width=300" alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
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
      </div>
    </div>
  )
}
