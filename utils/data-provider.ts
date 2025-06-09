/**
 * @fileoverview Penyedia data untuk komponen-komponen aplikasi
 * @author Tim Pengembang
 */

import type { Proyek, ProyekTim, AnggotaTim, TabNavigasi } from "@/types/komponen"

/**
 * Mendapatkan daftar tab navigasi
 * @returns {TabNavigasi[]} Daftar tab navigasi
 */
export function getNavigationTabs(): TabNavigasi[] {
  return [
    { id: "profile", label: "Profil", href: "/" },
    { id: "projects", label: "Proyek", href: "/projects" },
    { id: "activity", label: "Aktivitas", href: "/activity" },
    { id: "connections", label: "Koneksi", href: "/connections" },
  ]
}

/**
 * Mendapatkan daftar proyek personal
 * @returns {Proyek[]} Daftar proyek personal
 */
export function getPersonalProjects(): Proyek[] {
  return [
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
}

/**
 * Mendapatkan daftar proyek tim
 * @returns {ProyekTim[]} Daftar proyek tim
 */
export function getTeamProjects(): ProyekTim[] {
  return [
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
}

/**
 * Mendapatkan daftar anggota tim untuk proyek tertentu
 * @returns {AnggotaTim[]} Daftar anggota tim
 */
export function getProjectTeamMembers(): AnggotaTim[] {
  return [
    { name: "Gia Cheng", role: "Visual Designer", avatar: "GC" },
    { name: "Ahmad Usama", role: "Computer Science Student", avatar: "AU" },
  ]
}

/**
 * Mendapatkan daftar keahlian
 * @returns {string[]} Daftar keahlian
 */
export function getSkills(): string[] {
  return [
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
}

/**
 * Mendapatkan daftar keahlian untuk sidebar
 * @returns {string[]} Daftar keahlian untuk sidebar
 */
export function getSidebarSkills(): string[] {
  return ["Photoshop", "Illustrator", "InDesign", "Visual Design", "Sketch", "UX Design", "UI Design"]
}

/**
 * Mendapatkan daftar proyek untuk halaman profil
 * @returns {Array<{title: string, category: string}>} Daftar proyek profil
 */
export function getProfileProjects(): Array<{ title: string; category: string }> {
  return [
    { title: "UX/UI Design: Award Winning Public Safety App", category: "UI Design, UX Design" },
    { title: "Branding & Art Direction: Rowkin", category: "Photography, Art Direction" },
    { title: "Architecture Design: Green Secret Academy", category: "Architecture, Design" },
  ]
}
