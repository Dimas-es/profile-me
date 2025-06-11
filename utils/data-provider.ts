/**
 * @fileoverview Penyedia data untuk komponen-komponen aplikasi
 * @author Tim Pengembang
 */

import type { Proyek, ProyekTim, AnggotaTim, TabNavigasi } from "@/types/komponen"
import {
  getNavigationTabs as getNavTabs,
  getPersonalProjects as getPersonalProjs,
  getTeamProjects as getTeamProjs,
  getProjectTeamMembers as getTeamMembers,
  getProfileSkills as getSkillsList,
  getSidebarSkills as getSidebarSkillsList,
  getProfileProjects as getProfileProjs,
} from "@/app/utils/data-utils"

/**
 * Mendapatkan daftar tab navigasi
 * @returns {TabNavigasi[]} Daftar tab navigasi
 */
export function getNavigationTabs(): TabNavigasi[] {
  return getNavTabs()
}

/**
 * Mendapatkan daftar proyek personal
 * @returns {Proyek[]} Daftar proyek personal
 */
export function getPersonalProjects(): Proyek[] {
  return getPersonalProjs()
}

/**
 * Mendapatkan daftar proyek tim
 * @returns {ProyekTim[]} Daftar proyek tim
 */
export function getTeamProjects(): ProyekTim[] {
  return getTeamProjs()
}

/**
 * Mendapatkan daftar anggota tim untuk proyek tertentu
 * @returns {AnggotaTim[]} Daftar anggota tim
 */
export function getProjectTeamMembers(): AnggotaTim[] {
  return getTeamMembers()
}

/**
 * Mendapatkan daftar keahlian
 * @returns {string[]} Daftar keahlian
 */
export function getSkills(): string[] {
  return getSkillsList()
}

/**
 * Mendapatkan daftar keahlian untuk sidebar
 * @returns {string[]} Daftar keahlian untuk sidebar
 */
export function getSidebarSkills(): string[] {
  return getSidebarSkillsList()
}

/**
 * Mendapatkan daftar proyek untuk halaman profil
 * @returns {Array<{title: string, category: string}>} Daftar proyek profil
 */
export function getProfileProjects(): Array<{ title: string; category: string }> {
  return getProfileProjs()
}
