type GitHubEvent = {
  type: string;
  created_at: string;
  repo: { name: string };
  payload?: { action?: string };
};

export function summarizeActivity(events: GitHubEvent[], now = new Date()) {
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const start = today - 29 * 86_400_000;
  const daily = Array(30).fill(0) as number[];
  const repos = new Set<string>();
  let reviews = 0;
  let pushes = 0;

  for (const event of events) {
    const time = Date.parse(event.created_at);
    if (!Number.isFinite(time) || time < start || time >= today + 86_400_000 || event.type === "WatchEvent") continue;
    daily[Math.floor((time - start) / 86_400_000)]++;
    repos.add(event.repo.name);
    if (event.type === "PushEvent") pushes++;
    if (event.type === "PullRequestReviewEvent" && event.payload?.action === "created") reviews++;
  }

  return { daily, reviews, repos: repos.size, pushes };
}

export async function getPublicActivity() {
  const events: GitHubEvent[] = [];

  for (let page = 1; page <= 3; page++) {
    const response = await fetch(`https://api.github.com/users/jeevanshah07/events/public?per_page=100&page=${page}`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "jeevanshah-portfolio" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) throw new Error(`GitHub activity request failed: ${response.status}`);
    const data: unknown = await response.json();
    if (!Array.isArray(data)) throw new Error("Invalid GitHub activity response");
    events.push(...data.filter((event): event is GitHubEvent =>
      typeof event?.type === "string" &&
      typeof event?.created_at === "string" &&
      typeof event?.repo?.name === "string",
    ));
    if (data.length < 100) break;
  }

  return summarizeActivity(events);
}
