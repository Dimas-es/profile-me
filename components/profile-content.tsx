import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function ProfileContent() {
  const skills = [
    "Photoshop",
    "Illustrator",
    "InDesign",
    "After Effects",
    "Sketch",
    "Invision",
    "Keynote",
    "Web Design",
    "UI Design",
    "UX Design",
    "Photography",
    "Illustration",
  ]

  const projects = [
    { title: "UX/UI Design: Award Winning Public Safety App", category: "UI Design, UX Design" },
    { title: "Branding & Art Direction: Rowkin", category: "Photography, Art Direction" },
    { title: "Architecture Design: Green Secret Academy", category: "Architecture, Design" },
  ]

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Art-minded, creative visionary, design-focused, digital content creator passionate about design,
            photography, storytelling, entrepreneurship, branding, marketing, tech.
          </p>
          <Button variant="outline">Visit Website</Button>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className="aspect-square relative">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-sm">{project.title}</h3>
              <p className="text-blue-600 text-xs mt-1">{project.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="link" className="text-blue-600">
          See all projects
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white font-bold">AC</div>
            <div className="flex-1">
              <h3 className="font-semibold">Designer and Photographer</h3>
              <p className="text-gray-600">Ashley Choe</p>
              <p className="text-gray-500 text-sm">Dec 2017 - Present</p>
              <p className="text-gray-500 text-sm">San Francisco Bay Area</p>
              <p className="text-gray-600 text-sm mt-2">
                Create digital content and develop brand vision in a fast-growing consumer electronics startup.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-lg">📷</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Designer & Photographer</h3>
              <p className="text-gray-600">Owner</p>
              <p className="text-gray-500 text-sm">March 2012 - Present</p>
              <p className="text-gray-600 text-sm mt-2">Freelance photographer, designer, and illustrator.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
