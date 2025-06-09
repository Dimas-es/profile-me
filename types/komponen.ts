import type React from "react"
/**
 * @fileoverview Definisi tipe untuk komponen-komponen aplikasi
 * @author Tim Pengembang
 */

/**
 * Properti untuk komponen MainLayout
 * @interface MainLayoutProps
 * @property {React.ReactNode} children - Konten yang akan ditampilkan di dalam layout
 * @property {string} activeTab - Tab yang sedang aktif
 */
export interface MainLayoutProps {
  children: React.ReactNode
  activeTab: string
}

/**
 * Properti untuk komponen UnifiedHeader
 * @interface HeaderUtamaProps
 * @property {string} activeTab - Tab yang sedang aktif
 */
export interface HeaderUtamaProps {
  activeTab: string
}

/**
 * Properti untuk komponen PageContainer
 * @interface KontainerHalamanProps
 * @property {React.ReactNode} children - Konten yang akan ditampilkan di dalam kontainer
 */
export interface KontainerHalamanProps {
  children: React.ReactNode
}

/**
 * Properti untuk komponen ProjectDetail
 * @interface DetailProyekProps
 * @property {string} projectId - ID proyek yang akan ditampilkan
 */
export interface DetailProyekProps {
  projectId: string
}

/**
 * Struktur data untuk anggota tim
 * @interface AnggotaTim
 * @property {string} name - Nama anggota tim
 * @property {string} role - Peran anggota tim
 * @property {string} avatar - Inisial untuk avatar
 */
export interface AnggotaTim {
  name: string
  role: string
  avatar: string
}

/**
 * Struktur data untuk proyek
 * @interface Proyek
 * @property {number} id - ID unik proyek
 * @property {string} title - Judul proyek
 * @property {string} category - Kategori proyek
 * @property {string} description - Deskripsi proyek
 * @property {string} image - URL gambar proyek
 * @property {string[]} tags - Tag-tag yang terkait dengan proyek
 */
export interface Proyek {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

/**
 * Struktur data untuk proyek tim
 * @interface ProyekTim
 * @property {number} id - ID unik proyek
 * @property {string} title - Judul proyek
 * @property {string} role - Peran dalam proyek
 * @property {string} description - Deskripsi proyek
 * @property {string} image - URL gambar proyek
 * @property {Array<{name: string, role: string}>} team - Anggota tim proyek
 */
export interface ProyekTim {
  id: number
  title: string
  role: string
  description: string
  image: string
  team: Array<{ name: string; role: string }>
}

/**
 * Struktur data untuk tab navigasi
 * @interface TabNavigasi
 * @property {string} id - ID unik tab
 * @property {string} label - Label yang ditampilkan
 * @property {string} href - URL tujuan
 */
export interface TabNavigasi {
  id: string
  label: string
  href: string
}

/**
 * Struktur data untuk koneksi mutual
 * @interface KoneksiMutual
 * @property {number} id - ID unik koneksi
 * @property {string} name - Nama koneksi
 * @property {string} headline - Headline/jabatan koneksi
 * @property {string} company - Perusahaan koneksi
 * @property {string} avatar - Inisial untuk avatar
 * @property {number} mutualConnections - Jumlah koneksi mutual
 */
export interface KoneksiMutual {
  id: number
  name: string
  headline: string
  company: string
  avatar: string
  mutualConnections: number
}
