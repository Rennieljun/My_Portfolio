'use client';

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import menu from '@/public/menu.svg'
import menuOpen from '@/public/menuOpen.svg'
import {usePathname} from 'next/navigation'
import { url } from "@/app/api/auth/[...nextauth]/route";
const Nav = () => {
    const dl = url;
    const [toggleDropdown, setToggleDropdown] = useState(false)
    const path = usePathname();
    const menuRef = useRef();
    const openMenu = () => {
      setToggleDropdown((prev) => prev == false ? true: false);
    }

    useEffect(()=>{
      const handler = (e) => {
        if(!menuRef.current.contains(e.target)){
          setToggleDropdown(false);
        }
      }

      document.addEventListener('mousedown', handler)
    },[])
    
  return (
    <div className="overflow-hidden " ref={menuRef}>
    <nav className="fixed flex justify-between text-center px-3 bg-slate-900 w-full py-3 border-b-2 border-b-slate-800 text-blue-100 md:px-28 lg:px-56 z-50" >
        <Link href="/" className="flex items-center hover:font-bold duration-300 ease-in-out hover:scale-125 hover:text-cyan-300 text-center">Home</Link>
        <div className="sm:flex justify-center items-end gap-10 text-blue-100 hidden w-[30%] ">
            <Link href='#contacts' scroll={false} className="overflow-visible"><p className="hover:font-bold duration-300 ease-in-out hover:scale-125 hover:text-cyan-300 text-center">Contacts</p></Link>
            <Link href={path == '/projects' ? dl : '/projects'} target={path == '/projects' ? '_blank': ''} className="rounded-sm bg-cyan-600 hover:bg-cyan-300 hover:text-cyan-800 duration-300 ease-in-out text-lg font-bold px-3 shadow-md shadow-black">{path == '/projects' ? 'Resume' : 'Projects'}</Link>
        </div>
        <div className="sm:hidden flex relative">
            <div className="flex justify-center items-center" >
                {toggleDropdown == false ? (
                <Image 
                src={menu}
                alt='menuClose'
                width={40}
                height={40}
                priority={true}
                className=" hover:brightness-150 hover:cursor-pointer ease-in-out duration-300 active:scale-75"
                onClick={openMenu}
                 />
                ) : (
                <Image 
                src={menuOpen}
                alt='menuOpen'
                width={40}
                height={40}
                className=" hover:brightness-150 hover:cursor-pointer ease-in-out duration-300 active:scale-75"
                onClick={openMenu}
                />
                
                )}
            </div>
        </div>
        
    </nav>
    <div className="fixed md:hidden flex flex-col justify-start place-items-end gap-4 right-0 top-20 bottom-[50%] left-[50%] z-10 pointer-events-none">
        <div className={`item block w-full  rounded-l-2xl z-11 bg-[#1c86ba] shadow-md shadow-black ${toggleDropdown == false ? 'translate-x-80' : 'translate-x-0' } ease-in-out duration-300`}>
          <Link href={path =='/projects' ? dl : '/projects'} target={path == '/projects' ? '_blank': ''} onClick={openMenu}>
            <h1 className="text-center w-full font-bold text-lg text-cyan-100 pointer-events-auto ">{path == '/projects' ? 'Resume' : 'Projects'}</h1>
          </Link>
        </div>
        <div className={`item block w-[60%] rounded-l-2xl z-11 bg-[#1c86ba] shadow-md shadow-black ${toggleDropdown == false ? 'translate-x-80' : 'translate-x-0' } ease-in-out duration-700`}>
          <Link href='/#contacts' scroll={false} onClick={openMenu}>
            <h1 className="text-center w-full font-bold text-lg text-cyan-100 pointer-events-auto ">Contacts</h1>
          </Link>
        </div>
    </div>
    </div>
  )
}

export default Nav