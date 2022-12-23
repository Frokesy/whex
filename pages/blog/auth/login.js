import Link from 'next/link'
import React from 'react'
import { FaGoogle, FaGooglePlusG, FaGooglePlusSquare } from 'react-icons/fa'
import Header from '../../../components/blog/Header'

const Login = () => {
  return (
    <div className="bg-[url('/blog/cover.png')] bg-center bg-cover bg-no-repeat items-center h-screen opacity-90 justify-center">
      <Header />
      <div className="pt-[20vh]">
        <div className="flex flex-col w-[30vw] mx-auto pt-10 bg-neutral-800 rounded-lg px-6">
          <h2 className="text-[30px] font-bold text-white">Sign In</h2>
          <form>
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

                        <li className="flex flex-col text-[#ccc] text-center pt-4 space-y-2">
                            <ul>or</ul>
                            <ul className="flex items-center space-x-2 justify-center">
                              <span className="text-red-500"> <FaGoogle /> </span>
                              <span className="text-[15px] font-semibold">Continue with Google</span>
                            </ul>
                        </li>
                        
                        <div className="flex items-center justify-between mt-8 pb-8">
                            <Link href="#" passHref>
                                <span className="text-[#ccc] cursor-pointer text-[12px]">
                                    Forgot Password?
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

export default Login
