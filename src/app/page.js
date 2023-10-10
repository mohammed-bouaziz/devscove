import Allposts from './components/Allposts'
import Search from './components/search';
import Link from 'next/link';
import NewsLetter from './components/newsletter';

export const metadata = {
  title : "Helping Developers Land Jobs",
  description: "Land your dream job as a developer and boost your career",

}

async function getData() {
  console.log("page fetching")
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

export default async function Home() {
  const data = await getData()
    const posts = data.data
    console.log(posts)
   
    return (
      <>
      <h1 className='text-center font-bold font-mont text-2xl mt-28 mb-28'>
        Helping Developers Land Jobs 
      </h1>
      <div className='flex flex-col space-y-20'>
        <Search articles={posts} /> 
      <NewsLetter />
      </div>
      
      

      </>
    )
}




