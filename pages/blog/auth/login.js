import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FaGoogle } from 'react-icons/fa'
import Header from '../../../components/blog/Header'
import Meta from '../../defaults/Meta'
import { supabase } from '../../../utils/supabaseClient'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState({
    error: '',
    success: '',
  })

   const handleLogin = async (e) => {
    e.preventDefault()
    if (!email || !password) {
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
      const { user, error } = await supabase.auth.signIn({
          email: email,
          password: password
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
          }, 4000)
          return
      }
      setMessage({
          error: '',
          success: "Login successful, you'll be redirected shortly",
      })
      // setTimeout(() => {
      //     router.push('/chats')
      //     setMessage({
      //         error: '',
      //         success: '',
      //     })
      // }, 3000)
  } catch (error) {
      setMessage({
          error: error.message,
          success: '',
      })
      console.log(error.message)
      setTimeout(() => {
          setMessage({
              error: '',
              success: '',
          })
      }, 4000)
  }
   }

  return (
    <div className="bg-[url('/blog/cover.png')] bg-center bg-cover bg-no-repeat items-center h-screen opacity-90 justify-center">
      <Meta />
      <Header />
      <div className="pt-[25vh]">
        <div className="flex flex-col w-[30vw] mx-auto pt-10 bg-neutral-800 rounded-lg px-6">
          <h2 className="text-[30px] font-bold text-white">Sign In</h2>
          <span className="text-[#ccc] text-[13px]">For administrative use only!</span>
          <p 
          className={`${ message.error && 'text-red-700' } ${ message.success && 'text-[#0fa84e]' } p-1 text-[13px] font-semibold mt-4 rounded-md text-center`}>
            {message.error ? message.error : message.success}
          </p>
          <form onSubmit={handleLogin}>
                        <div className="input-field flex flex-col space-y-2 mt-6">
                            <label htmlFor="email" 
                                className="text-[#ccc] font-semibold">
                                    Email:
                            </label>
                            <input type="text" name="username" id="username" 
                                placeholder="ayanfeoluwaakindele24@gmail.com"
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
                        
                        <div className="flex items-center justify-end mt-8 pb-8">
                            <button className="bg-blue-400 text-white font-semibold py-2 px-14 text-[14px] rounded-md">Login</button>
                        </div>
                    </form>
        </div>
      </div>
    </div>
  )
}

export default Login
