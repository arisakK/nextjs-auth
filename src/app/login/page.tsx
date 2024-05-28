'use client'

import Navbar from '@/app/components/Navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const { data: session } = useSession()
  if (session) {
    router.replace('/welcome')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (res?.error) {
        setError('Invalid credentials.')
      }

      router.replace('/welcome')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Navbar session={session} />
      <div className="container mx-auto py-5">
        <h3>Login Page</h3>
        <hr className="my-3" />
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <input
            onChange={(e) => setEmail(e.target.value)}
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="block bg-gray-300 p-2 my-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-md text-white"
          >
            Sign Up
          </button>
        </form>
        <hr className="my-3" />
        <p>
          Already have an account? go to{' '}
          <Link className="text-blue-500 hover:underline" href="/register">
            Register
          </Link>{' '}
          Page
        </p>
      </div>
    </div>
  )
}

export default LoginPage
