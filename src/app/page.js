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
      <div className='bg-slate-900 p-6 rounded-lg mt-16 mb-16 text-gray-200'>
        <h1 className='text-center font-bold font-mont text-2xl mb-10'>
        Helping Developers Land Jobs 
      </h1>
      <h2 className='font-hind text-lg'>
        Welcome to our blog dedicated to helping developers land their dream jobs 
        and boost their careers through a wealth of tutorials, insightful articles, 
        and personal experiences. <br/>
        <br/>
        Whether you're a seasoned developer looking for advanced insights 
        or just starting your coding journey, 
        our content is tailored to empower you with the knowledge and skills you need 
        to succeed in the tech industry.<br/> 
        <br/>
        Explore our tutorials, 
        dive into thought-provoking articles, and gain valuable insights 
        from our personal experiences to advance your career in 
        the ever-evolving world of development.<br/> 
        Join us on the path to professional growth and success.
      </h2>
      </div>
        
      <div className='flex flex-col space-y-20'>
        <Search articles={posts} /> 
      <NewsLetter />
      </div>
      
      

      </>
    )
}




