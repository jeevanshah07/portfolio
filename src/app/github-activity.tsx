import { getPublicActivity } from "./activity";

export default async function GitHubActivity() {
  let activity;
  try {
    activity = await getPublicActivity();
  } catch {
    return (
      <div className="ep-activity">
        <div className="ep-activity-heading"><span>ACTIVITY · LAST 30 DAYS</span><a href="https://github.com/jeevanshah07" target="_blank" rel="noopener noreferrer">JEEVANSHAH07 ↗</a></div>
        <p className="ep-activity-unavailable">Activity is unavailable right now. <a href="https://github.com/jeevanshah07" target="_blank" rel="noopener noreferrer">View recent work on GitHub ↗</a></p>
      </div>
    );
  }

  const max = Math.max(1, ...activity.daily);
  const points = activity.daily.map((count, index) => `${index * 10},${72 - (count / max) * 58}`).join(" ");

  return (
    <div className="ep-activity">
      <div className="ep-activity-heading"><span>ACTIVITY · LAST 30 DAYS</span><a href="https://github.com/jeevanshah07" target="_blank" rel="noopener noreferrer">JEEVANSHAH07 ↗</a></div>
      <svg className="ep-activity-chart" viewBox="0 0 290 82" preserveAspectRatio="none" role="img" aria-label="Daily public GitHub activity over the last 30 days">
        <path d="M0 72H290 M0 43H290 M0 14H290" stroke="currentColor" strokeOpacity=".18" strokeDasharray="2 4" fill="none" />
        <polyline points={points} fill="none" stroke="var(--ep-accent)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="ep-activity-metrics">
        <div><strong>{activity.reviews}</strong><span>REVIEWS<br />GIVEN</span></div>
        <div><strong>{activity.repos}</strong><span>REPOS<br />ACTIVE</span></div>
        <div><strong>{activity.pushes}</strong><span>PUSHES<br />MADE</span></div>
      </div>
      <p className="ep-activity-note">PUBLIC EVENTS · GITHUB MAY LAG</p>
    </div>
  );
}
