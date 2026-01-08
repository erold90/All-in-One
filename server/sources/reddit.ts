import type { NewsItem } from "@shared/types"

interface RedditResponse {
  data: {
    children: Array<{
      data: {
        id: string
        title: string
        permalink: string
        score: number
        num_comments: number
        created_utc: number
      }
    }>
  }
}

async function fetchSubreddit(subreddit: string): Promise<NewsItem[]> {
  const url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=20`
  const res: RedditResponse = await myFetch(url, {
    headers: {
      "User-Agent": "NewsNow/1.0",
    },
  })

  return res.data.children.map(post => ({
    id: post.data.id,
    title: post.data.title,
    url: `https://reddit.com${post.data.permalink}`,
    extra: {
      info: `${post.data.score} points · ${post.data.num_comments} comments`,
    },
  }))
}

export default defineSource({
  "reddit": () => fetchSubreddit("worldnews"),
  "reddit-worldnews": () => fetchSubreddit("worldnews"),
  "reddit-technology": () => fetchSubreddit("technology"),
  "reddit-news": () => fetchSubreddit("news"),
})
