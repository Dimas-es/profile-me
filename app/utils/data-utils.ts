import { data } from "./data-loader"

/**
 * Centralized data utility functions
 * @module data-utils
 */

// Profile data
export const getProfileData = () => data.profile
export const getProfileName = () => data.profile.name
export const getProfileTitle = () => data.profile.title
export const getProfileEducation = () => data.profile.education
export const getProfileAbout = () => data.profile.about
export const getProfileExperience = () => data.profile.experience
export const getProfileSkills = () => data.profile.skills
export const getSidebarSkills = () => data.profile.sidebarSkills

// Navigation data
export const getNavigationTabs = () => data.navigation.tabs
export const getNavigationButtons = () => data.navigation.buttons

// Projects data
export const getPersonalProjects = () => data.projects.personal
export const getTeamProjects = () => data.projects.team
export const getProfileProjects = () => data.projects.profileProjects
export const getFeaturedProject = () => data.projects.featuredProject
export const getMoreProjects = () => data.projects.moreProjects
export const getProjectHeadings = () => data.projects.headings

// Get a specific project by ID
export const getProjectById = (id: string | number) => {
  const numericId = typeof id === "string" ? Number.parseInt(id, 10) : id
  return [...data.projects.personal, ...data.projects.team].find((project) => project.id === numericId)
}

// Connections data
export const getConnectionsTitle = () => data.connections.title
export const getMutualConnections = () => data.connections.mutualConnections

// Sidebar data
export const getSidebarContact = () => data.sidebar.contact
export const getSidebarSkillsTitle = () => data.sidebar.skills.title

// Pages data
export const getActivityPageData = () => data.pages.activity
export const getSectionTitles = () => data.pages.sections
export const getPlaceholders = () => data.pages.placeholders

// Project team members
export const getProjectTeamMembers = () => data.projects.featuredProject.teamMembers

// Helper function to search for specific content
export const findContent = (searchTerm: string): any[] => {
  const results: any[] = []

  const searchInObject = (obj: any, path = "") => {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key

      if (typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push({ path: currentPath, content: value })
      } else if (typeof value === "object" && value !== null) {
        searchInObject(value, currentPath)
      }
    }
  }

  searchInObject(data)
  return results
}

// Helper function to get content structure (for future admin interface)
export const getContentStructure = () => {
  return {
    profile: Object.keys(data.profile),
    navigation: Object.keys(data.navigation),
    projects: Object.keys(data.projects),
    connections: Object.keys(data.connections),
    sidebar: Object.keys(data.sidebar),
    pages: Object.keys(data.pages),
  }
}
