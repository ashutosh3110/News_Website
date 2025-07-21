import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Image from "next/image"

export default async function ImagePage({params}){
  
    const newsItemSlug=params.slug;
    const newsItem=DUMMY_NEWS.find(newsItem=>newsItem.slug === newsItemSlug)
    if(!newsItem){
        notFound();
    }
    return (
    <div className="fullscreen-image">
        <Image src={`https://ashutoshnewswebsite.s3.ap-south-1.amazonaws.com/${newsItem.image}` } alt={newsItem.title} fill  />
    </div>
    )

}