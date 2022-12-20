import React from 'react'
import Header from '../../components/blog/Header'
import Meta from '../defaults/Meta'
import EmbrScript from '../EmberScript'
const Blog = () => {
  return (
    <>
      <Meta 
      title="WHEXcosystem || Blog" />
      <div id="home" className="bg-[url('/blog/cover.png')] bg-center bg-cover bg-no-repeat h-[60vh] items-center justify-center">
        <Header />
        <EmbrScript />
      </div>
    </>
  )
}

export default Blog
