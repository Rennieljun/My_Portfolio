'use client';

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import avatar from '/public/avatar.png'
const Nav = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <nav className="fixed flex justify-between text-center px-3 bg-slate-900 w-full pt-2 pb-1 border-b-2 border-b-slate-800 text-blue-100 md:px-28 lg:px-56 z-50" >
        <Link href="/" className="flex items-center">Home</Link>
        <div className="sm:flex justify-evenly text-blue-100 gap-4 hidden">
            <Link href='/contact'>Contact</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/profile'>Profile</Link>
        </div>
        <div className="sm:hidden flex relative">
            <div className="flex">
                <Image 
                src={avatar}
                alt='profile'
                width={40}
                height={40}
                className="rounded-full border-2 border-slate-800 hover:border-slate-500 hover:cursor-pointer"
                 />
            </div>
        </div>
    </nav>
  )
}

export default Nav