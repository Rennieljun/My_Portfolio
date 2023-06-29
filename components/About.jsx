'use client'
import profile from '@/public/myProfile.png'
import Image from 'next/image'
import { motion } from 'framer-motion'


const title = {
    initial: {
        scale: 0,
        opacity: 0,

    },
    show: {
        transition: {
            duration: 1, ease: "easeIn"
        },
        scale: 2,
        opacity: 1,
    }
}
const About = () => {
  return (
    <>
    <hr className='border-blue-950 pt-52' />
    <div className='px-4 max-w-full overflow-hidden flex justify-center items-center'>
        <div className='block'>
            <motion.h1 
            className='title font-bold text-slate-400 mb-16 text-center' variants={title}
            initial="initial"
            whileInView="show"
            >About ME</motion.h1>
        </div>
    </div>
    <div className="auto-container pb-72 grid md:grid-cols-2 grid-cols-1 gap-3 mt-52">
        <div className='flex justify-center items-center w-full'>
             <div className='rounded-full w-fit overflow-hidden border-2'>
                <Image 
                src={profile}
                width={200}
                height={300}
                alt="My picture"
                />
            </div>
        </div>
        <div className='flex justify-center items-center w-full'>
             <div className='w-fit overflow-hidden'>
                <h2 className='desc md:text-left text-center'>
                    Hello! I'm Renniel my goal is to be a software developer to gain experience and develop my skills example of that are the programming languages, tools, framework I used to build this portfolio wich is the Next.js a new framework of React.js that I'm still exploring its functionality and for the styling of this porftolio I used Tailwind css and Framer Motion for the animation.
                </h2>
            </div>
        </div>
    </div>
    </>
  )
}

export default About