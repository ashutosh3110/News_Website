import Link from "next/link";

export default function NewsListPage({news}){
    return(
        <ul className="news-list">
            {news.map((newsitem)=>(
                <li key={newsitem.id}>
                    <Link href={`/news/${newsitem.slug}`}>
                    <img src={newsitem.image} alt={newsitem.title} />
                    <span>{newsitem.title}</span>
                    </Link>
                </li>
            ))}
           
        </ul> 
    )
}