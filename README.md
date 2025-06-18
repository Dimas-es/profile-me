# Portfolio Profesional

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/dimas-projects-9b54a5cc/v0-next-js-setup)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/p7xHzT0OLCv)

## Overview

Website portfolio profesional yang dibangun menggunakan Next.js dengan pendekatan App Router. Website ini dirancang untuk:
- Menampilkan profil profesional
- Memamerkan proyek-proyek yang telah dikerjakan
- Membangun jaringan profesional
- Mencatat aktivitas dan pencapaian

## Fitur Utama

1. **Profil Profesional**
   - Informasi pribadi dan profesional
   - Keahlian dan pengalaman
   - Pencapaian dan sertifikasi

2. **Portfolio Proyek**
   - Galeri proyek dengan detail lengkap
   - Kategorisasi proyek
   - Tim dan kolaborasi

3. **Jaringan Profesional**
   - Daftar koneksi
   - Koneksi mutual
   - Rekomendasi

4. **Aktivitas**
   - Timeline aktivitas
   - Pencapaian
   - Update status

## Struktur Proyek

```
├── app/                    # Direktori utama Next.js App Router
│   ├── activity/           # Halaman aktivitas dan timeline
│   ├── connections/        # Halaman koneksi profesional
│   ├── profile/            # Halaman profil profesional
│   ├── project/[id]/       # Halaman detail proyek
│   ├── projects/           # Halaman galeri proyek
│   ├── layout.tsx          # Layout utama aplikasi
│   └── page.tsx            # Halaman beranda
├── components/             # Komponen-komponen React
│   ├── header/             # Komponen header
│   ├── layout/             # Komponen layout
│   ├── profil/             # Komponen profil
│   ├── proyek/             # Komponen proyek
│   ├── sidebar/            # Komponen sidebar
│   ├── ui/                 # Komponen UI dasar
│   └── kontainer-halaman.tsx # Komponen kontainer halaman
├── types/                  # Definisi tipe TypeScript
└── utils/                  # Fungsi utilitas dan penyedia data
```

## Konvensi Penamaan

1. **File Komponen**: Menggunakan kebab-case (contoh: `header-utama.tsx`)
2. **Nama Komponen**: Menggunakan PascalCase (contoh: `HeaderUtama`)
3. **Nama Fungsi**: Menggunakan camelCase (contoh: `getNavigationTabs()`)
4. **Nama Interface**: Menggunakan PascalCase (contoh: `MainLayoutProps`)
5. **Nama Variabel**: Menggunakan camelCase (contoh: `activeTab`)

## Komponen Utama

### Layout Utama (`layout-utama.tsx`)
- Navigasi responsif
- Header profil
- Sidebar untuk akses cepat
- Menu mobile

### Header Utama (`header-utama.tsx`)
- Foto profil
- Informasi profesional
- Tombol aksi
- Navigasi

### Kontainer Halaman (`kontainer-halaman.tsx`)
Komponen pembungkus dengan styling konsisten.

### Grid Proyek (`grid-proyek.tsx`)
- Galeri proyek
- Filter dan pencarian
- Kategorisasi
- Detail proyek

### Detail Proyek (`detail-proyek.tsx`)
- Deskripsi lengkap
- Galeri gambar
- Informasi tim
- Proyek terkait

## Responsivitas

Website dirancang dengan pendekatan mobile-first:
- **Mobile**: Tampilan optimal untuk perangkat kecil
- **Tablet**: Layout yang lebih luas
- **Desktop**: Tampilan penuh dengan fitur tambahan

## Praktik Kode Bersih

1. **Modularitas**: Komponen yang reusable
2. **Dokumentasi**: JSDoc lengkap
3. **TypeScript**: Type safety
4. **Clean Code**: Struktur yang rapi
5. **Konsistensi**: Standar coding yang konsisten

## Deployment

Website di-deploy di Vercel:
**[https://vercel.com/dimas-projects-9b54a5cc/v0-next-js-setup](https://vercel.com/dimas-projects-9b54a5cc/v0-next-js-setup)**

## Pengembangan Lebih Lanjut

1. Integrasi dengan CMS untuk manajemen konten
2. Sistem autentikasi untuk area privat
3. Fitur blog untuk berbagi pengetahuan
4. Integrasi dengan platform profesional (GitHub, LinkedIn, dll)
5. Sistem notifikasi untuk interaksi
