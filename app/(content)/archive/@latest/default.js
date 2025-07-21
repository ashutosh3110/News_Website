import NewsListPage from "@/Components/news-list";
import { getLatestNews } from "@/lib/news"

export default function LatestNews(){
    const latestNews=getLatestNews();
    return( 
    <>
    <h2>Latest News</h2>  
    <NewsListPage news={latestNews} />
    </>
    )
}