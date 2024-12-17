import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className=' flex flex-between fixed  z-50 w-full bg-dark-1px-6 py-4 lg:px-10'>
      <Link  href='/' className='flex items-centergap-1x' >
      <Image 
         src = "/icons/logo.svg"
         width = {32}
         height = {32}
         alt = 'Vroom Logo'
         className='max-sm:size-10'
         />
       <p className=' text-[26px] font-extrabold text-white max-sm:hidden'>Vroom</p>
      
      </Link>
       <div className='flex-between gap-5 '>
       <SignedIn>
              <UserButton />
       </SignedIn>
       <SignedOut>
        <SignInButton/>
       </SignedOut>
        <MobileNav />
       </div>
      </nav>
  )
}

export default Navbar