import Link from "next/link";
import Image from "next/image"

export default function NewsListPage({news}){
    return(
        <ul className="news-list">
            {news.map((newsitem)=>(
                <li key={newsitem.id}>
                    <Link href={`/news/${newsitem.slug}`}> 
                    <img src={`https://ashutoshnewswebsite.s3.ap-south-1.amazonaws.com/${newsitem.image}` } alt={newsitem.title}  />
                    <span>{newsitem.title}</span>
                    </Link>
                </li>
            ))}
           
        </ul> 
    )
}