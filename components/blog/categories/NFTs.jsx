import Link from 'next/link'
import React from 'react'
import { getArticlesByCategory } from '../../../services'

const NFTs = () => {
    const [articles, setArticles] = React.useState([])
        
    const fetchArticles = async () => {
        const articles = await getArticlesByCategory("Sports")
        setArticles(articles.articles)
    }

    React.useEffect(() => {
        fetchArticles()
    }, [])

    const articlesToDisplay = articles.slice(0, 6)

    
  return (
    <div>
       <div className="pt-[10vh] w-[85vw]">
            <h2 className="text-white text-[30px]">NFTs</h2>
            <div className="grid grid-cols-3 gap-10 pt-6 w-[85vw] mx-auto">
                {articlesToDisplay?.map((article, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-t-3xl rounded-br-3xl">
                            <div className="h-[30vh] object-cover">
                                <img src={article.coverPhoto.url} alt="image1" className="h-[100%] w-[100%]" />
                            </div>
                                <h2 className="py-2 px-3 font-semibold text-[16px] hover:underline cursor-pointer">{article.title.length > 90 ? `${article.title.slice(0, 90)}...` : `${article.title}`}.</h2>
                            
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

export default NFTs

export const getStaticProps = async ({ params }) => {
    const articlesByCategory = await getArticlesByCategory(params.category);
    return {
      props: {
        articles: articles.articles,
      }
    };
  };
