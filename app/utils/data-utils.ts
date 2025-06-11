import data from "../data/data.json"

/**
 * Utility functions to access centralized data
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
