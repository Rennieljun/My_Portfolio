'use client'
import { useEffect, useState } from "react"
import { getDocData } from "@/app/api/auth/[...nextauth]/route"
import Image from "next/image"
import Link from "next/link"


const PojectList = () => {
    const [proj, setProj] = useState([])

    useEffect(()=>{
        const data = getDocData();
        data.then((item) => {
            setProj(item.Projects);
        })
    },[])

  return (
    <> 
    {proj.map(item => (
    <li key={item.name} className="w-[200px] h-[300px] rounded-lg bg-slate-800 border border-slate-600 relative overflow-hidden shadow-lg shadow-black">
        <Image 
        src={item.url}
        fill
        alt={item.name}
        />
        <div className="group absolute top-0 right-0 left-0 bottom-[-150px] flex justify-end hover:bottom-[0] items-end duration-700 ease-out transition-all pointer-events-auto overflow-visible">
            <h1 className="w-[100%] h-[200px] text-center bg-cyan-700 py-2 font-bold text-lg transition-all duration-300  ease-in-out  group-hover:rounded-t-full flex justify-between flex-col">{item.name} <Link href={item.link} target="_blank" className="group-hover:scale-125 group-hover:font-bold group-hover:translate-y-[-50px] underline duration-700 ease-in-out">Live Preview</Link></h1></div>
    </li>
    ))}
    </>
  )
}

export default PojectList