import { NextResponse } from 'next/server'

const MEDIUM_USERNAME = '@adeyemiadeniji'
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${MEDIUM_USERNAME}`

export async function GET() {
  try {
    const response = await fetch(RSS_URL, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: 'Failed to fetch articles' },
        { status: 400 }
      )
    }

    const data = await response.json()

    if (data.status !== 'ok') {
      return NextResponse.json(
        { success: false, message: 'No articles found' },
        { status: 400 }
      )
    }

    const articles = data.items.slice(0, 3).map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      author: item.author || MEDIUM_USERNAME,
    }))

    return NextResponse.json({
      success: true,
      articles,
    })
  } catch (error) {
    console.error('Error fetching Medium articles:', error)
    return NextResponse.json(
      { success: false, message: 'Error fetching articles' },
      { status: 500 }
    )
  }
}
