import Link from "next/link"
import {DUMMY_NEWS} from "@/dummy-news"
import NewsListPage from "@/Components/news-list"
export default function NewsPage(){


    return(
      
        <>
          <h1>News Page</h1>
          <NewsListPage news={DUMMY_NEWS} />
        </>
    ) 
}