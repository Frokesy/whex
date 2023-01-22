import Link from 'next/link'
import React from 'react'
import Meta from '../../../pages/defaults/Meta'
import { getArticlesByCategory } from '../../../services'

const Entertainment = () => {
    const [articles, setArticles] = React.useState([])
        
    const fetchArticles = async () => {
        const articles = await getArticlesByCategory("Entertainment")
        setArticles(articles.articles)
    }

    React.useEffect(() => {
        fetchArticles()
    }, [])

    const articlesToDisplay = articles.slice(0, 6)

    
  return (
    <div>
      <Meta />
       <div className="pt-[10vh] lg:w-[85vw] w-[90vw]">
            <h2 className="text-white lg:text-[30px] text-[22px] font-bold">Entertainment</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-10 lg:gap-10 pt-6 lg:w-[85vw] w-[90vw] mx-auto">
                {articlesToDisplay?.map((article, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-t-3xl rounded-br-3xl">
                            <div className="h-[35vh] object-cover">
                                <img src={article.coverPhoto.url} alt="image1" className="h-[100%] w-[100%]" />
                            </div>
                            <Link href={`/blog/${article.slug}`} passHref>
                                <h2 className="py-2 px-3 font-semibold text-[16px] hover:underline cursor-pointer">{article.title.length > 90 ? `${article.title.slice(0, 90)}...` : `${article.title}`}.</h2>
                            </Link>
                            
                            <span className="px-3 text-[13px]">{article.excerpt.length > 210 ? `${article.excerpt.slice(0, 210)}...` : `${article.excerpt}`}</span>
                        <div className="flex justify-end py-4 px-3">
                          <Link href={`/blog/${article.slug}`} passHref>
                            <button className="bg-blue-400 font-bold text-white rounded-2xl font-mono text-[12px] px-6 py-2">Read More</button>
                          </Link>
                        </div>
                        </div>
                    ))}
            </div>
            {articles?.length > 6 ? (
              <div className="flex justify-center pt-6">
                  <button className="bg-blue-400 font-bold text-white rounded-2xl font-mono text-[12px] px-6 py-2">Show All</button>
              </div>
              ) : null}
        </div>
    </div>
  )
}

export default Entertainment
