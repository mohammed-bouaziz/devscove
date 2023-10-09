

async function getData() {
    console.log("sitemap fetching")
    const res = await fetch('https://devscove-backend-0fdec5ed1fa3.herokuapp.com/api/blog-posts?populate=*', {
      cache: "no-store",
      next: {
        revalidate: 1,
      },
    })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }




export default async function sitemap () {
    const baseUrl = "https://www.devcove.co";

    const data = await getData()
    const posts = data.data

    const postUrls = posts.map(post => ({
        url: `${baseUrl}/${post.id}`,
        lastModified: post.attributes.publishedAt
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/subscribe`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/courses`,
            lastModified: new Date()
        },
        ...postUrls
    ]
}