/**
 * @fileoverview Komponen detail proyek untuk menampilkan informasi lengkap proyek
 * @author Tim Pengembang
 */

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import type { DetailProyekProps } from "@/types/komponen"
import { getProjectTeamMembers } from "@/utils/data-provider"

/**
 * Komponen yang menampilkan detail lengkap dari sebuah proyek
 *
 * @component
 * @param {DetailProyekProps} props - Properti komponen
 * @param {string} props.projectId - ID proyek yang akan ditampilkan
 * @returns {JSX.Element} Komponen detail proyek
 *
 * @example
 * ```tsx
 * <DetailProyek projectId="1" />
 * ```
 */
export function DetailProyek({ projectId }: DetailProyekProps) {
  const teamMembers = getProjectTeamMembers()

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
        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        <Link href="/projects" className="text-xs sm:text-sm hover:text-blue-600">
          Kembali ke Daftar Proyek
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
              First Assist: Aplikasi Keselamatan Publik Pemenang Penghargaan
            </h1>
            <p className="text-blue-600 font-medium text-sm">UI Design, UX Design</p>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">
              Untuk FirstNET's Public Safety Hackathon, kami ingin membangun aplikasi yang membantu orang dengan
              disabilitas mobilitas terhubung dengan petugas tanggap darurat selama insiden kebakaran. Aplikasi web ini
              menciptakan database yang efisien dan antarmuka bagi departemen pemadam kebakaran untuk diberi peringatan
              dan mengakses informasi orang-orang yang mungkin membutuhkan bantuan selama insiden kebakaran.
            </p>
            <p className="text-gray-600">
              Ketika alarm kebakaran berbunyi, aplikasi secara otomatis mengumpulkan lokasi dan data pribadi pengguna,
              yang dikirim ke departemen pemadam kebakaran. Aplikasi kemudian berjalan di latar belakang pada ponsel,
              dan aktif ketika ada alarm kebakaran. Aplikasi mengirimkan pesan ke departemen pemadam kebakaran bahwa
              pengguna aplikasi tertentu (individu dengan disabilitas) mungkin dalam bahaya.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-video relative rounded-none overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Antarmuka Aplikasi First Assist"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-none overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tampilan Mobile Aplikasi First Assist"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Tim Proyek</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <p className="text-xs text-gray-500">Peran Proyek: {member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline">Pelajari Lebih Lanjut</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-lg sm:text-xl font-semibold">Jelajahi Proyek Lainnya</h2>
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Cari" className="pl-10 w-full sm:w-64" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {moreProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative">
                <Image src="/placeholder.svg?height=200&width=300" alt={project.title} fill className="object-cover" />
              </div>
              <CardContent className="p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg">{project.title}</h3>
                <p className="text-blue-600 text-xs sm:text-sm font-medium mt-1">{project.category}</p>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 sm:mt-2 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
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
