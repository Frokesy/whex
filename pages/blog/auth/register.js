import Link from 'next/link'
import React from 'react'
import { FaGoogle, FaGooglePlusG, FaGooglePlusSquare } from 'react-icons/fa'
import Header from '../../../components/blog/Header'
import Meta from '../../defaults/Meta'

const Signup = () => {
  return (
    <div className="bg-[url('/blog/cover.png')] bg-center bg-cover bg-no-repeat items-center h-[full] opacity-90 justify-center">
      <Meta />
      <Header />
      <div className="pt-[20vh] pb-[10vh]">
        <div className="flex flex-col w-[40vw] mx-auto pt-10 bg-neutral-800 rounded-lg px-6">
          <h2 className="text-[30px] font-bold text-white">Sign Up</h2>
          <form>
                        <div className="input-field flex flex-col space-y-2 mt-6">
                            <label htmlFor="name" 
                                className="text-[#ccc] font-semibold">
                                    Name:
                            </label>
                        <div className="flex space-x-2 w-[100%]">
                            <input type="text" name="firstname" id="firstname" 
                                placeholder="John"
                                className="border-gray-500 border-2 rounded-md p-3 w-[50%] focus:border focus:border-[#ccc] placeholder:italic bg-transparent outline-none outline-offset-2 text-[#ccc]"
                            />
                            <input type="text" name="lastname" id="lastname" 
                                placeholder="Doe"
                                className="border-gray-500 border-2 rounded-md p-3 focus:border w-[50%] focus:border-[#ccc] placeholder:italic bg-transparent outline-none outline-offset-2 text-[#ccc]"
                            />
                        </div>
                        </div>
                        <div className="input-field flex flex-col space-y-2 mt-6">
                            <label htmlFor="email" 
                                className="text-[#ccc] font-semibold">
                                    Email:
                            </label>
                            <input type="email" name="email" id="email" 
                                placeholder="johndoe@gmail.com"
                                className="border-gray-500 border-2 rounded-md p-3 focus:border focus:border-[#ccc] placeholder:italic bg-transparent outline-none outline-offset-2 text-[#ccc]"
                            />
                        </div>
                        <div className="input-field flex flex-col space-y-2 mt-6">
                            <label htmlFor="password" 
                                className="text-[#ccc] required:border-red-500 font-semibold">
                                    Password:
                            </label>
                            <input type="password" name="password" id="password" 
                                placeholder="********"
                                className="border-gray-500 border-2 rounded-md p-3 focus:border focus:border-[#ccc] outline-none bg-transparent outline-offset-2 text-[#ccc]" 
                            />
                        </div>
                        <div className="input-field flex flex-col space-y-2 mt-6">
                            <label htmlFor="password" 
                                className="text-[#ccc] required:border-red-500 font-semibold">
                                   Confirm Password:
                            </label>
                            <input type="password" name="password" id="password2" 
                                placeholder="********"
                                className="border-gray-500 border-2 rounded-md p-3 focus:border focus:border-[#ccc] outline-none bg-transparent outline-offset-2 text-[#ccc]" 
                            />
                        </div>

                        <li className="flex flex-col text-[#ccc] text-center pt-4 space-y-2">
                            <ul>or</ul>
                            <ul className="flex items-center space-x-2 justify-center">
                              <span className="text-red-500"> <FaGoogle /> </span>
                              <span className="text-[15px] font-semibold">Get Started with Google</span>
                            </ul>
                        </li>
                        
                        <div className="flex items-center justify-between mt-8 pb-8">
                            <Link href="#" passHref>
                                <span className="text-[#ccc] cursor-pointer text-[12px]">
                                    Already a member? Login
                                </span>
                            </Link>
                            <button className="bg-blue-400 text-white font-semibold py-2 px-14 text-[14px] rounded-md">Login</button>
                        </div>
                    </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
