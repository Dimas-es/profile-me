'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

interface GitHubContribution {
  date: string
  count: number
  level: number
}

async function fetchGitHubContributions(username: string) {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub contributions')
  }
  return response.json()
}

export function GitHubContributionBG() {
  const [isVisible, setIsVisible] = useState(false)
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Dimas-es'

  const { data, isLoading, error } = useQuery({
    queryKey: ['githubContributions', username],
    queryFn: () => fetchGitHubContributions(username),
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: 3, // Retry 3 times if failed
  })

  useEffect(() => {
    if (data) {
      setIsVisible(true)
    }
  }, [data])

  if (isLoading) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <div className="animate-pulse flex space-x-2">
          <div className="w-2 h-2 bg-gray-700 rounded-full" />
          <div className="w-2 h-2 bg-gray-700 rounded-full" />
          <div className="w-2 h-2 bg-gray-700 rounded-full" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Failed to load GitHub contributions</p>
      </div>
    )
  }

  // Data dari API jogruber sudah dalam bentuk grid (array of weeks)
  const weeks = data?.contributions || []

  if (!weeks.length) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400 text-sm">No contributions found</p>
      </div>
    )
  }

  return (
    <div className={`w-full h-full flex flex-row gap-[2px] p-2 bg-gray-900 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {weeks.map((week: { days?: GitHubContribution[] }, weekIdx: number) => (
        <div key={weekIdx} className="flex flex-col gap-[2px]">
          {(Array.isArray(week.days) ? week.days : []).map((day, dayIdx) => (
            <div
              key={dayIdx}
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: getContributionColor(day.level) }}
              title={`${day.date}: ${day.count} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function getContributionColor(level: number): string {
  switch (level) {
    case 0:
      return '#161b22'
    case 1:
      return '#0e4429'
    case 2:
      return '#006d32'
    case 3:
      return '#26a641'
    case 4:
      return '#39d353'
    default:
      return '#161b22'
  }
} 