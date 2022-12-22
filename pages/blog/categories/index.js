import React from 'react'
import { FaArchive, FaChessKnight, FaHome, FaNewspaper, FaPeopleArrows, FaPeopleCarry } from 'react-icons/fa'

const Categories = () => {
  return (
    <div className="w-[80vw] mx-auto">
        <h2 className="text-white text-[30px]">Browse Categories</h2>
      <div className="flex justify-between pt-6 w-[55vw] space-x-6 mx-auto">
        <div className="bg-white py-3 px-12 rounded-lg flex space-x-2 items-center text-[16px]">
            <FaNewspaper />
            <h3>News and articles</h3>
        </div>
        <div className="bg-white py-3 px-12 rounded-lg flex space-x-2 items-center text-[16px]">
            <FaPeopleCarry />
            <h3>Most Popular</h3>
        </div>
        <div className="bg-white py-3 px-12 rounded-lg flex space-x-2 items-center text-[16px]">
            <FaArchive />
            <h3>Recommended for you</h3>
        </div>
      </div>

      <div className="pt-[10vh]">
            <h2 className="text-white text-[30px]">Popular Topics</h2>

            <div className="grid grid-cols-4 gap-x-6 pt-6 w-[80vw] mx-auto">
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image1.png" alt="image1" className="h-[90%]" />
                    <h2 className="py-4 px-6 font-bold">Law and crypto</h2>
                </div>
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image2.png" alt="image1" className="h-[90%]" />
                    <h2 className="py-4 px-6 font-bold">The Metaverse</h2>
                </div>
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image3.png" alt="image1" className="h-[90%]" />
                    <h2 className="py-4 px-6 font-bold">Bitcoin today</h2>
                </div>
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image4.png" alt="image1" className="h-[90%]" />
                    <h2 className="py-4 px-6 font-bold">WHEX article</h2>
                </div>
            </div>
        </div>


        <div className="pt-[10vh]">
            <h2 className="text-white text-[30px]">News and Articles</h2>

            <div className="grid grid-cols-2 gap-x-14 pt-6 w-[80vw] mx-auto">
                <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image4.png" alt="image1" className="h-[90%]" />
                    <h2 className="pt-4 px-6 font-bold">WHEX article</h2>
                    <span className="pb-4 pt-2 px-6 text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellat.</span>
                    <div className="flex justify-end pb-3 pt-1 px-6">
                        <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">Read More</button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image3.png" alt="image1" className="h-[90%]" />
                    <h2 className="pt-4 px-6 font-bold">Our Universe</h2>
                    <span className="pb-4 pt-2 px-6 text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellat.</span>
                    <div className="flex justify-end pb-3 pt-1 px-6">
                        <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">Read More</button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image2.png" alt="image1" className="h-[90%]" />
                    <h2 className="pt-4 px-6 font-bold">Time is of the essence</h2>
                    <span className="pb-4 pt-2 px-6 text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellat.</span>
                    <div className="flex justify-end pb-3 pt-1 px-6">
                        <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">Read More</button>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image1.png" alt="image1" className="h-[90%]" />
                    <h2 className="pt-4 px-6 font-bold">Getting the best out of yourself</h2>
                    <span className="pb-4 pt-2 px-6 text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellat.</span>
                    <div className="flex justify-end pb-3 pt-1 px-6">
                        <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">Read More</button>
                    </div>
                </div>
                </div>
                <div className="">
                <div className="flex flex-col bg-white h-full">
                    <img src="/blog/cover.png" alt="image1" className="h-[80%]" />
                    <h2 className="pt-4 px-6 font-bold">What is new with WHEX?</h2>
                    <span className="pb-4 pt-2 px-6 text-[13px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores enim expedita architecto totam, deserunt explicabo nam accusantium in illo eos ea neque a! Assumenda tenetur, adipisci delectus atque velit dolore soluta eaque dolores dolorum consectetur iure, nulla fugiat maiores, enim veritatis repudiandae quis accusantium!</span>
                    <div className="flex justify-end pb-3 pt-1 px-6">
                        <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">Read More</button>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="pt-[10vh]">
            <h2 className="text-white text-[30px]">Recommendation</h2>

            <div className="pt-6 grid grid-cols-2 gap-x-10 ">
                <div className="flex flex-col space-y-4">
                    <div className="flex">
                        <img src="/blog/cover.png" alt="image1" className="w-[30%] h-full object-cover" />
                        <div className="flex flex-col space-y-2 px-4 bg-white rounded-r-lg">
                            <h2 className="pt-10 text-[20px] font-bold">How To Become A Crypto Millionaire</h2>
                            <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus sed accusantium nesciunt eos mollitia, eum similique tenetur architecto dolore aperiam ut, est laudantium voluptates magni rerum quis doloribus molestias!</span>
                            
                            <div className="flex pb-6 pt-2">
                                <div className="flex space-x-2">
                                    <img src="/peter_wake.jpg" alt="image1" className="w-[12%] rounded-full" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[15px]">Peter Wake</span>
                                        <span className="text-[11px]">4th June, 2021</span>
                                    </div>
                                </div>
                                <div className="flex justify-end w-full">
                                    <button className="bg-blue-400 font-light text-white rounded-lg text-[12px] px-4 py-2">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex pt-4">
                        <img src="/blog/cover.png" alt="image1" className="w-[30%] h-full object-cover" />
                        <div className="flex flex-col space-y-2 px-4 bg-white rounded-r-lg">
                            <h2 className="pt-10 text-[20px] font-bold">How To Become A Crypto Millionaire</h2>
                            <span className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id accusamus sed accusantium nesciunt eos mollitia, eum similique tenetur architecto dolore aperiam ut, est laudantium voluptates magni rerum quis doloribus molestias!</span>
                            
                            <div className="flex pb-6 pt-2">
                                <div className="flex space-x-2">
                                    <img src="/peter_wake.jpg" alt="image1" className="w-[12%] rounded-full" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[15px]">Peter Wake</span>
                                        <span className="text-[11px]">4th June, 2021</span>
                                    </div>
                                </div>
                                <div className="flex justify-end w-full">
                                    <button className="bg-blue-400 font-light text-white rounded-lg text-[12px] px-4 py-2">Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col bg-white h-full">
                    <img src="/blog/cover.png" alt="image1" className="h-[90%]" />
                    <h2 className="pt-4 px-6 font-bold">What is new with WHEX?</h2>
                    <span className="pb-4 pt-2 px-6 text-[13px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis asperiores enim expedita architecto totam, deserunt explicabo nam accusantium in illo eos ea neque a! Assumenda tenetur, adipisci delectus atque velit dolore soluta eaque dolores dolorum consectetur iure, nulla fugiat maiores, enim veritatis repudiandae quis accusantium!</span>
                    <div className="flex justify-end pb-3 pt-1 px-6">
                        <button className="bg-blue-400 font-light text-white rounded-lg font-mono text-[12px] px-4 py-2">Read More</button>
                    </div>
                </div>
            </div>
        </div>


        <div className="pt-[10vh]">
            <h2 className="text-white text-[30px]">Latest Posts</h2>

            <div className="flex justify-between space-x-10 pt-6">
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image5.png" alt="image5" className="h-[90%]" />
                    <span className="px-6 pt-4 pb-3 text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aliquam nesciunt minima sunt culpa harum necessitatibus deserunt quam cum fugit?</span>
                    <div className="flex pb-6 pt-2 px-6">
                            <div className="flex space-x-2">
                            <img src="/peter_wake.jpg" alt="image1" className="w-[12%] rounded-full" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[15px]">Peter Wake</span>
                                <span className="text-[11px]">4th June, 2021</span>
                            </div>
                        </div>
                        <div className="flex justify-end w-full">
                            <button className="bg-blue-400 font-light text-white rounded-lg text-[12px] px-4 py-2">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image6.png" alt="image5" className="h-[90%]" />
                    <span className="px-6 pt-4 pb-3 text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aliquam nesciunt minima sunt culpa harum necessitatibus deserunt quam cum fugit?</span>

                    <div className="flex pb-6 pt-2 px-6">
                            <div className="flex space-x-2">
                            <img src="/peter_wake.jpg" alt="image1" className="w-[12%] rounded-full" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[15px]">Peter Wake</span>
                                <span className="text-[11px]">4th June, 2021</span>
                            </div>
                        </div>
                        <div className="flex justify-end w-full">
                            <button className="bg-blue-400 font-light text-white rounded-lg text-[12px] px-4 py-2">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-t-3xl">
                    <img src="/blog/image7.png" alt="image5" className="h-[90%]" />
                    <span className="px-6 pt-4 pb-3 text-[15px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aliquam nesciunt minima sunt culpa harum necessitatibus deserunt quam cum fugit?</span>
                    
                    <div className="flex pb-6 pt-2 px-6">
                            <div className="flex space-x-2">
                            <img src="/peter_wake.jpg" alt="image1" className="w-[12%] rounded-full" />
                            <div className="flex flex-col">
                                <span className="font-bold text-[15px]">Peter Wake</span>
                                <span className="text-[11px]">4th June, 2021</span>
                            </div>
                        </div>
                        <div className="flex justify-end w-full">
                            <button className="bg-blue-400 font-light text-white rounded-lg text-[12px] px-4 py-2">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories
