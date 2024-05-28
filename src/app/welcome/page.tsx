'use client'

import Navbar from '@/app/components/Navbar'
import { useSession } from 'next-auth/react'
import React from 'react'

const WelComePage = () => {
  const { data: session } = useSession()

  return (
    <div>
      <Navbar session={session} />
      <div className="container ma-auto">
        <h3 className="text-3xl my-3">Welcome {session?.user?.name}</h3>
        <hr className="my-3"></hr>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veniam
          aliquyam ex blandit facilisis nobis autem, minim accusam proident aute
          sed gubergren in aliqua at. Erat nam nam nisi. Eros dolore sed.
        </p>
      </div>
    </div>
  )
}

export default WelComePage
