import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaGoogle, FaGooglePlusG, FaGooglePlusSquare } from 'react-icons/fa'
import Header from '../../../components/blog/Header'
import Meta from '../../defaults/Meta'
import { supabase } from '../../../utils/supabaseClient'

const Signup = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState({
        error: '',
        success: '',
      })

    const handleSignup = async (e) => {
        e.preventDefault()
        if (!firstname || !lastname || !email || !password) {
            setMessage({
                error: 'Please fill in all fields',
                success: '',
            })
            setTimeout(() => {
                setMessage({
                    error: '',
                    success: '',
                })
            }, 3000)
        }
        try {
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })
            if (error) {
                setMessage({
                    error: error.message,
                    success: '',
                })
                setTimeout(() => {
                    setMessage({
                        error: '',
                        success: '',
                    })
                }, 3000)
            }
            else {
                setMessage({
                    error: '',
                    success: 'Account created successfully! Please check your email to verify your account.',
                })
                setTimeout(() => {
                    setMessage({
                        error: '',
                        success: '',
                    })
                }, 3000)
            }
    
            const { data, error: authError } = await supabase.from("writers").insert([
                {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                }
            ])
            if (authError) {
                console.log('error', authError)
            }
            else {
                console.log('data', data)
            }
        } catch (error) {
            console.log('error', error)
        }
    }

  return (
    <div className="bg-[url('/blog/cover.png')] bg-center bg-cover bg-no-repeat items-center h-[full] opacity-90 justify-center">
      <Meta />
      <Header />
      <div className="pt-[20vh] pb-[20vh]">
        <div className="flex flex-col w-[40vw] mx-auto pt-10 bg-neutral-800 rounded-lg px-6">
          <h2 className="text-[30px] font-bold text-white">Sign Up</h2>
          <p 
          className={`${ message.error && 'text-red-700' } ${ message.success && 'text-[#0fa84e]' } p-1 text-[13px] font-semibold mt-4 rounded-md text-center`}>
            {message.error ? message.error : message.success}
          </p>
          <form onSubmit={handleSignup}>
                        <div className="input-field flex flex-col space-y-2 mt-6">
                            <label htmlFor="name" 
                                className="text-[#ccc] font-semibold">
                                    Name:
                            </label>
                        <div className="flex space-x-2 w-[100%]">
                            <input type="text" name="firstname" id="firstname" 
                                placeholder="John"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                className="border-gray-500 border-2 rounded-md p-3 w-[50%] focus:border focus:border-[#ccc] placeholder:italic bg-transparent outline-none outline-offset-2 text-[#ccc]"
                            />
                            <input type="text" name="lastname" id="lastname" 
                                placeholder="Doe"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
