import React from 'react'
import Header from '../../components/blog/Header'
import Meta from '../defaults/Meta'
import EmbrScript from '../EmberScript'
import Categories from './categories'
const Blog = () => {
  return (
    <>
      <Meta 
      title="WHEXcosystem || Blog" />
      <div className="bg-[url('/blog/cover.png')] bg-center bg-cover bg-no-repeat items-center justify-center">
        <Header />
        <EmbrScript />
        <div className="items-center flex justify-center flex-col">
          <h2 
          className="lg:text-[100px] text-[50px] text-center font-[Montserrat] pt-[15vh] font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-r from-green-300
          via-pink-200 to-purple-900">WHEXcosystem Blog</h2>
          <span
          className="pt-[2vh] pb-[5vh] lg:pb-[10vh] lg:text-[30px] text-[20px] text-white lg:w-[55vw] w-[80vw] lg:max-w-[60vw] text-center"
          >Great news and Articles about our market and get unbelievable knowledge in the easiest of ways through our blog. Have fun!!!</span>
        </div>
      </div>

      <div className="bg-neutral-800 py-[3vh] h-full">
        <Categories />
      </div>
    </>
  )
}

export default Blog
