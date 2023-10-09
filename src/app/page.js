import Allposts from './components/Allposts'
import Search from './components/search';
import Link from 'next/link';
import NewsLetter from './components/newsletter';

export const metadata = {
  title : "Helping Developers Get Better",
  description: "If you are Developer, writing software, mobile apps, web apps, machine learning or artificial intelligence, this platform will help you get better, land better jobs, improve your carerr and bring more opportunities your way, you will develop your coding skills, create great projetcs from scartch, understand the tech industry better and succeed as a developer",

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
        Helping Developers Get Better
      </h1>
      <div className='flex flex-col space-y-20'>
        <Search />
      {posts.map((val, i) => {
      return (
        <>
        <Link href={`/${val.id}`}>
          <Allposts key={i} 
                   title={val.attributes.title} 
                   description={val.attributes.description} 
                   url={val.attributes.featuredImg.data.attributes.formats.thumbnail.url} />
        </Link>
         
        </>
       )
     })} 

      <NewsLetter />
      </div>
      
      

      </>
    )
}




