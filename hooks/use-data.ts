"use client"

import { useState } from "react"
import * as dataUtils from "@/app/utils/data-utils"

/**
 * Custom hook for accessing data with caching
 * @returns All data utility functions with memoization
 */
export function useData() {
  // Create a cache for expensive data operations
  const [cache, setCache] = useState<Record<string, any>>({})

  // Wrap data utility functions to cache results
  const getCached = <T,>(key: string, fn: () => T): T => {
    if (cache[key] === undefined) {
      const result = fn()
      setCache((prev) => ({ ...prev, [key]: result }))
      return result
    }
    return cache[key] as T
  }

  return {
    // Profile data
    getProfileData: () => getCached("profileData", dataUtils.getProfileData),
    getProfileName: () => getCached("profileName", dataUtils.getProfileName),
    getProfileTitle: () => getCached("profileTitle", dataUtils.getProfileTitle),
    getProfileEducation: () => getCached("profileEducation", dataUtils.getProfileEducation),
    getProfileAbout: () => getCached("profileAbout", dataUtils.getProfileAbout),
    getProfileExperience: () => getCached("profileExperience", dataUtils.getProfileExperience),
    getProfileSkills: () => getCached("profileSkills", dataUtils.getProfileSkills),
    getSidebarSkills: () => getCached("sidebarSkills", dataUtils.getSidebarSkills),

    // Navigation data
    getNavigationTabs: () => getCached("navigationTabs", dataUtils.getNavigationTabs),
    getNavigationButtons: () => getCached("navigationButtons", dataUtils.getNavigationButtons),

    // Projects data
    getPersonalProjects: () => getCached("personalProjects", dataUtils.getPersonalProjects),
    getTeamProjects: () => getCached("teamProjects", dataUtils.getTeamProjects),
    getProfileProjects: () => getCached("profileProjects", dataUtils.getProfileProjects),
    getFeaturedProject: () => getCached("featuredProject", dataUtils.getFeaturedProject),
    getMoreProjects: () => getCached("moreProjects", dataUtils.getMoreProjects),
    getProjectHeadings: () => getCached("projectHeadings", dataUtils.getProjectHeadings),
    getProjectById: (id: string | number) => {
      const key = `project_${id}`
      return getCached(key, () => dataUtils.getProjectById(id))
    },

    // Connections data
    getConnectionsTitle: () => getCached("connectionsTitle", dataUtils.getConnectionsTitle),
    getMutualConnections: () => getCached("mutualConnections", dataUtils.getMutualConnections),

    // Sidebar data
    getSidebarContact: () => getCached("sidebarContact", dataUtils.getSidebarContact),
    getSidebarSkillsTitle: () => getCached("sidebarSkillsTitle", dataUtils.getSidebarSkillsTitle),

    // Pages data
    getActivityPageData: () => getCached("activityPageData", dataUtils.getActivityPageData),
    getSectionTitles: () => getCached("sectionTitles", dataUtils.getSectionTitles),
    getPlaceholders: () => getCached("placeholders", dataUtils.getPlaceholders),

    // Project team members
    getProjectTeamMembers: () => getCached("projectTeamMembers", dataUtils.getProjectTeamMembers),
  }
}
