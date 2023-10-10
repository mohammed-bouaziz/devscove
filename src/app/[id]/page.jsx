
import ReactMarkdown from 'react-markdown'


async function getPost(id) {
    console.log({id})
    const res = await fetch(`https://devscove-backend-0fdec5ed1fa3.herokuapp.com/api/blog-posts/${id}?populate=*`, {
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

export async function generateMetadata({params}) {
  const id = params.id
  const data = await getPost(id)
  const post = data.data

  if (!post) return { 
    title: "Not found",
    description: "Not found"
  }
  else {
    return {
      title: post.attributes.title,
      description: post.attributes.description,
      alternates : {
        canonical: `https://www.devcove.co/${id}`,
        languges: {
          "en-CA": `en-CA/${id}`
        },
      }
    }
  }

}

export default async function Post({params}) {
    
    const id = params.id
    const data = await getPost(id)
    const post = data.data
    

    return (

        <div className="flex flex-col items-center justify-between space-y-10">
            <h1 className="text-3xl font-bold font-mont mt-32">{post.attributes.title}</h1>
            <h2 className="italic">{post.attributes.description}</h2>
            <article className="text-justify prose">
                <ReactMarkdown>{post.attributes.content}</ReactMarkdown> 
            </article>
        </div>
    )  
}