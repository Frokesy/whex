import moment from 'moment'
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
          <div className="pt-[10vh] w-[85vw]">
            <h2 className="text-white text-[30px]">Featured Posts</h2>

            <div className="pt-6 grid grid-cols-2 gap-x-10">
                <div className="flex flex-col space-y-4 mt-8 items-center">
                {featuredArticles?.map((article, index) => (
                    <div key={index} className="flex bg-white">
                        <div className="w-[30%]">
                            <img src={article.coverPhoto.url} alt={article.slug} className="h-[100%] object-cover" />
                        </div>
                        <div className="flex flex-col space-y-2 px-4 rounded-r-lg">
                            <h2 className="pt-6 text-[20px] font-bold">{article.title}</h2>
                            <span className="text-[14px]">{article.excerpt}</span>
                            
                            <div className="flex pb-6 pt-2">
                                <div className="flex space-x-2">
                                    <img src="/peter_wake.jpg" alt="image1" className="w-[14%] rounded-full" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[15px]">{article.author.name}</span>
                                        <span className="text-[11px]">
                                            {moment(article.createdAt).format('MMMM Do YYYY')}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-end w-full">
                                    <button className="bg-blue-400 font-light text-white rounded-lg text-[12px] px-4 py-2">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>


                <div className="flex flex-col bg-white rounded-t-3xl">
                        <img src={mainFeaturedArticle?.coverPhoto?.url} alt="image1" className="object-fit h-[40vh] w-[100%]" />
                    <h2 className="pt-4 px-6 font-bold">{mainFeaturedArticle?.title}</h2>
                    <span className="pb-4 pt-2 px-6 text-[13px]">{mainFeaturedArticle?.excerpt}</span>
                    <div className="flex justify-end pb-3 pt-1 px-6">
                        <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
