import { expect, test } from "vitest";
import { summarizeActivity } from "./activity";

test("counts recent public work once per event and excludes stars and old events", () => {
  const activity = summarizeActivity([
    { type: "PushEvent", created_at: "2026-09-25T12:00:00Z", repo: { name: "rutgers-fsae/firmware" } },
    { type: "PullRequestReviewEvent", created_at: "2026-09-24T12:00:00Z", repo: { name: "rutgers-fsae/firmware" }, payload: { action: "created" } },
    { type: "WatchEvent", created_at: "2026-09-25T12:00:00Z", repo: { name: "other/repo" } },
    { type: "PushEvent", created_at: "2026-08-25T12:00:00Z", repo: { name: "old/repo" } },
  ], new Date("2026-09-25T18:00:00Z"));

  expect({ reviews: activity.reviews, repos: activity.repos, pushes: activity.pushes }).toEqual({ reviews: 1, repos: 1, pushes: 1 });
  expect(activity.daily.reduce((sum, count) => sum + count, 0)).toBe(2);
  expect(activity.daily.at(-1)).toBe(1);
});
