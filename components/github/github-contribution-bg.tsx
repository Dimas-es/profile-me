import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

async function fetchGitHubContributions(username: string) {
  const response = await fetch(`/api/github-contributions?username=${username}`);
  if (!response.ok) throw new Error('Failed to fetch GitHub contributions');
  return response.json();
}

export function GitHubContributionBG() {
  const [isVisible, setIsVisible] = useState(false);
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'Dimas-es';

  const { data, isLoading, error } = useQuery({
    queryKey: ['githubContributions', username],
    queryFn: () => fetchGitHubContributions(username),
    staleTime: 1000 * 60 * 60,
    retry: 3,
  });

  useEffect(() => {
    if (data) setIsVisible(true);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading contributions</div>;

  const weeks = data?.weeks || [];

  if (!weeks.length) return <div>No contributions found</div>;

  return (
    <div className={isVisible ? 'opacity-100' : 'opacity-0'}>
      {weeks.map((week, weekIdx) => (
        <div key={weekIdx} className="flex flex-col gap-[2px]">
          {week.contributionDays.map((day, dayIdx) => (
            <div
              key={dayIdx}
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: day.color }}
              title={`${day.date}: ${day.contributionCount} contributions`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}