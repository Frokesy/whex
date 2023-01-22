import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { getFeaturedArticles } from '../../../services'

const Featured = () => {
        const [featuredArticles, setFeaturedArticles] = React.useState([])
        const [mainFeaturedArticle, setMainFeaturedArticle] = React.useState([])
            
        const fetchFeaturedArticles = async () => {
            const featuredArticles = await getFeaturedArticles()
            setFeaturedArticles(featuredArticles.articles.slice(0, 2))
            setMainFeaturedArticle(featuredArticles.articles[2])
        }
    
        React.useEffect(() => {
            fetchFeaturedArticles()
        }, [])
  return (
    <div>
          <div className="pt-[10vh] lg:w-[85vw] w-[90vw] mx-auto">
            <h2 className="text-white text-[30px]">Featured Posts</h2>

            <div className="pt-6 grid lg:grid-cols-2 grid-cols-1 gap-x-10">
                <div className="flex flex-col space-y-4 mt-8 items-center">
                {featuredArticles?.map((article, index) => (
                    <div key={index} className="flex bg-white lg:flex-row rounded-t-3xl lg:rounded-t-none flex-col">
                        <div className="lg:w-[30%] w-[100%] h-[40vh] lg:h-auto">
                            <img src={article.coverPhoto.url} alt={article.slug} className="h-[100%] w-[100%] object-cover" />
                        </div>
                        <div className="flex flex-col space-y-2 px-3 rounded-r-lg">
                        <Link href={`/blog/${article.slug}`} passHref>
                            <h2 className="pt-6 text-[20px] font-bold cursor-pointer hover:underline">{article.title}</h2>
                        </Link>
                            <span className="text-[14px]">{article.excerpt}</span>
                            
                            <div className="flex pb-6 pt-2">
                                <div className="flex space-x-2">
                                    <img src={article.author.avatar.url} alt="image1" className="w-[3rem] h-[2.2rem] rounded-full" />
                                    <div className="flex flex-col">
                                        <span className="font-semibold lg:text-[13px] text-[11px]">{article.author.name}</span>
                                    </div>
                                </div>
                                <div className="flex justify-end w-full">
                                    <Link href={`/blog/${article.slug}`} passHref>
                                    <button className="bg-blue-400 font-light text-white rounded-lg text-[12px] px-4 py-1 lg:py-2">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>


                <div className="flex flex-col lg:mt-0 mt-6 bg-white rounded-t-3xl">
                        <img src={mainFeaturedArticle?.coverPhoto?.url} alt="image1" className="object-fit h-[40vh] w-[100%]" />
                    <h2 className="pt-4 px-6 font-bold cursor-pointer hover:underline">{mainFeaturedArticle?.title}</h2>
                    <span className="pb-4 pt-2 px-6 text-[13px]">{mainFeaturedArticle?.excerpt}</span>
                    <div className="flex justify-end pb-3 pt-1 px-6">
                        <Link href={`/blog/${mainFeaturedArticle.slug}`} passHref>
                        <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
