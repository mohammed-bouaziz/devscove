"use client";
import { useState } from "react";
import Allposts from "./Allposts";
import Link from "next/link";


const Search = ({articles}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredArtciles, setFilteredArticles] = useState(articles)

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query)

        const filtered = articles.filter((article) => article.attributes.title.toLowerCase().includes(query));

        setFilteredArticles(filtered)
    }

    return (
        
<form>
    <div className="flex mb-24">
        <div className="relative w-full">
            <input value={searchQuery} onChange={handleSearchChange} required type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-l-gray-200  dark:border-gray-200 dark:placeholder-gray-700 dark:text-black dark:focus:border-blue-500" placeholder="Search Tutorials..." required />
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-900 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
    {
        filteredArtciles.map((article) =>  (
            <Link href={`/${article.id}`}>
          <Allposts key={article.id} 
                   title={article.attributes.title} 
                   description={article.attributes.description} 
                   url={article.attributes.featuredImg.data.attributes.formats.thumbnail.url} />
        </Link>
        ))
    }
    

</form>

    )
}

export default Search;