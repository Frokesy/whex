import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaCoins, FaNewspaper, FaMusic, FaArchive } from 'react-icons/fa'
import Entertainment from '../../../components/blog/categories/Entertainment'
import NFTs from '../../../components/blog/categories/NFTs'
import News from '../../../components/blog/categories/News'
import Footer from '../../../components/blog/Footer'
import { getPopularTopics } from '../../../services'
import Featured from '../../../components/blog/categories/Featured'
import Meta from '../../defaults/Meta'

const Categories = () => {
    const [posts, setPosts] = React.useState([])
        
        const fetchPosts = async () => {
            const posts = await getPopularTopics()
            setPosts(posts.articles)
        }

        useEffect(() => {
            fetchPosts()
        }, [])
  return (
    <div className="lg:w-[80vw] w-[90vw] mx-auto">
        <Meta />
        <h2 className="text-white lg:text-[30px] text-[22px] font-bold">Browse Categories</h2>
      <div className="flex justify-between pt-6 lg:w-[55vw] w-[90vw] overflow-scroll lg:overflow-hidden space-x-6 mx-auto">
        <div className="bg-white lg:py-3 py-1 lg:px-12 px-4 cursor-pointer rounded-lg flex space-x-2 items-center text-[13px] lg:text-[16px]">
            <FaCoins />
            <a href='#nfts'>NFTs/Crypto</a>
        </div>
        <div className="bg-white lg:py-3 py-1 lg:px-12 px-4 rounded-lg cursor-pointer flex space-x-2 items-center text-[13px] lg:text-[16px]">
            <FaMusic />
            <a href='#entertainment'>Entertainment</a>
        </div>
        <div className="bg-white lg:py-3 py-1 lg:px-12 hidden rounded-lg cursor-pointer lg:flex space-x-2 items-center text-[13px] lg:text-[16px]">
            <FaNewspaper />
            <a href="global-news">Global News</a>
        </div>
        <div className="bg-white lg:py-3 py-1 lg:px-12 px-4 rounded-lg cursor-pointer flex lg:hidden space-x-2 items-center text-[13px] lg:text-[16px]">
            <FaNewspaper />
            <a href="global-news">News</a>
        </div>
      </div>
      <div className="pt-[10vh]">
            <h2 className="text-white lg:text-[30px] text-[22px] font-bold">Popular Topics</h2>

            <div className="grid lg:grid-cols-4 lg:gap-x-6 pt-6 lg:w-[85vw] w-[90vw] gap-y-8 lg:gap-y-0 grid-cols-1 mx-auto">
                {posts?.map((post, index) => (
                        <div key={index} className="flex flex-col bg-white rounded-t-3xl">
                            <div className="lg:h-[30vh] h-[35vh] object-cover">
                                <img src={post.coverPhoto.url} alt="image1" className="h-[100%] w-[100%]" />
                            </div>
                            <Link href={`/blog/${post.slug}`} passHref>
                                <h2 className="lg:py-2 py-4 px-3 font-semibold text-[16px] hover:underline cursor-pointer">{post.title.length > 90 ? `${post.title.slice(0, 90)}...` : `${post.title}`}.</h2>
                            </Link>
                        <div className="flex justify-end pb-3 pt-4 px-3">
                            <span className="bg-purple-900 font-bold text-white rounded-tl-lg rounded-br-lg font-mono text-[12px] px-6 py-1">{post.categories[0].name}</span>
                        </div>
                        </div>
                    ))}
            </div>
        </div>

        <div id='nfts'>
            <NFTs />
        </div>

        <div id='entertainment'>
            <Entertainment />
        </div>

        <div id='global-news'>
            <News />
        </div>

        <div id="featured">
            <Featured />
        </div>

    

        <Footer />
    </div>
  )
}

export default Categories
