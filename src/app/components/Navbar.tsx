'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function Navbar({ session }: { session: any }) {
  return (
    <nav className="bg-[#333] text-white p-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">NextAuth</Link>
          </div>
          <ul className="flex">
            {!session ? (
              <>
                <li className="mx-3">
                  <Link href="/login">Sign In</Link>
                </li>
                <li className="mx-3">
                  <Link href="/register">Sign Up</Link>
                </li>
              </>
            ) : (
              <li className="mx-3">
                <a
                  onClick={() => signOut()}
                  className="bg-red-500 text-white border py-2 px-3 rounded-lg my-2"
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
