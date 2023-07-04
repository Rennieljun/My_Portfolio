'use client'
import profile from '@/public/myProfile.png'
import { motion } from 'framer-motion'
import Image from 'next/image'
import css from '@/public/skills icon/css.svg'
import firebaseicon from '@/public/skills icon/firebase.svg'
import html from '@/public/skills icon/html.svg'
import javascript from '@/public/skills icon/javascript.svg'
import reacticon from '@/public/skills icon/react.svg'
import nextjs from '@/public/skills icon/nextjs.svg'
import tailwindcss from '@/public/skills icon/tailwindcss.svg'
import { useEffect, useState } from 'react'
import { db, getDocData, getMessage } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link'
import Contacts from './Contacts'

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
const containerVariant = {
    initial: {
        x: 0,
        opacity: 1,
    },
    show: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
        x: 0,
        opacity: 1,
    }
}
const childVariant = {
    initial: {
        y: 10,
        opacity: 0,
    },
    show: {
        transition: {
            duration: 0.2,
            ease: "easeOut"
        },
        y: 0,
        opacity: 1,
    }
}
const About = () => {
    const [cert, setCert] = useState([])
    useEffect(() => {
        const data = getDocData();
        data.then((docs) => {
            setCert(docs.Certificates);
        })
    }, [])
  return (
    <>
    <hr className='border-blue-950 pt-52' />
    <div className='px-4 max-w-full overflow-hidden flex justify-center items-center'>
        <div className='block'>
            <motion.h1 
            className='title font-bold text-slate-400 mb-16 text-center' variants={title}
            initial="initial"
            whileInView="show"
            viewport={{once: true}}
            >About</motion.h1>
        </div>
    </div>
    <div 
    className="auto-container grid md:grid-cols-2 grid-cols-1 gap-3 mt-52">
        <div className='flex flex-col justify-center items-center w-full'>
             <motion.div
             initial={{scale: 0, opacity: 0}}
             whileInView={{scale: [0, 1.2, 0.8, 1], opacity: 1, transition: {duration: 1, ease: "easeOut"}}}
             viewport={{once: true}}
             className='w-fit rounded-full overflow-hidden'>
                <Image 
                src={profile}
                width={300}
                height={400}
                alt="My picture"
                className='opacity-80 md:max-w-[300px] md:max-h-[400px] w-[200px] h-[200px]'
                />
            </motion.div>
            <motion.blockquote
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1, transition: {duration: 1, ease: "easeOut"}}}
            viewport={{once: true}}
            className='md:text-lg text-sm text-slate-500 italic my-5'>
                "We got errors, We sipped coffee."
            </motion.blockquote>
        </div>
        <div className='flex justify-center items-center w-full'>
             <div className='w-fit overflow-hidden'>
                <motion.h2 
                initial={{y: 20, scale: 0, opacity: 0}}
                whileInView={{y: 0, scale: 1, opacity: 1, transition: {duration: 1, ease: "easeOut"}}}
                viewport={{once: true}}
                className='md:text-lg text-sm md:text-left text-center text-slate-500'>
                    <span className='md:text-lg text-sm text-slate-300 font-bold'>Hello, </span> I'm Renniel. My goal is to be a software developer to gain experience and develop my skills and knowledge. Example of that are the programming languages, tools, framework I used to build this portfolio wich is the <span className='text-cyan-600'>Next.js</span>  a new framework of <span className='text-cyan-600'>React.js</span> that I'm still exploring its functionality and for the styling of this porftolio I used <span className='text-cyan-600'>Tailwind css</span>, <span className='text-cyan-600'>Framer Motion</span>  for the animation and I also used <span className='text-orange-700'>firebase</span> to store some info on this portfolio and NodeMailer so you can send me a message.
                </motion.h2>
            </div>
        </div>
    </div>
    <div className='auto-container flex flex-col justify-center items-center w-full md:w-[80%] pt-5 mt-32 pb-40'>
        <h1 className='text-left w-full font-bold text-cyan-500 md:text-2xl text-sm'>Technologies</h1>
        <motion.div 
        variants={containerVariant}
        initial="initial"
        whileInView='show'
        className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 mb-10 mt-2 p-3'>
            <motion.div 
            variants={childVariant}
            className='flex justify-center items-center bg-slate-800 rounded-sm border border-slate-600 p-1'>
                <div className='px-1 md:w-[50px] min-w-[20px] w-[30px]'>
                    <Image
                src={html}
                width={50}
                height={50}
                quality={80}
                loading='lazy'
                alt='html'
                className='opacity-80'
                />
                </div>
                <div className='px-1'>
                    <p className='md:text-lg text-[3vw] text-slate-400 font-bold p-1'>HTML</p>
                </div>
            </motion.div>
            <motion.div 
            variants={childVariant}
            className='flex justify-center items-center bg-slate-800 rounded-sm border border-slate-600 p-1'>
                <div className='px-1 md:w-[50px] min-w-[20px] w-[30px]'>
                <Image
                src={css}
                width={50}
                height={50}
                quality={80}
                loading='lazy'
                alt='CSS'
                className='opacity-80'
                />
                </div>
                <div className='px-1'>
                    <p className='md:text-lg text-[3vw] text-slate-400 font-bold p-1'>CSS</p>
                </div>
            </motion.div>
            <motion.div 
            variants={childVariant}
            className='flex justify-center items-center bg-slate-800 rounded-sm border border-slate-600 p-1'>
                <div className='px-1 md:w-[50px] min-w-[20px] w-[30px]'>
                <Image
                src={javascript}
                width={50}
                height={50}
                quality={80}
                loading='lazy'
                alt='javasript'
                className='opacity-80'
                />
                </div>
                <div className='px-1'>
                    <p className='md:text-lg text-[3vw] text-slate-400 font-bold p-1'>JAVASCRIPT</p>
                </div>
            </motion.div>
            <motion.div 
            variants={childVariant}
            className='flex justify-center items-center bg-slate-800 rounded-sm border border-slate-600 p-1'>
                <div className='px-1 md:w-[50px] min-w-[20px] w-[30px]'>
                <Image
                src={reacticon}
                width={50}
                height={50}
                quality={80}
                loading='lazy'
                alt='react'
                className='opacity-80'
                />
                </div>
                <div className='px-1'>
                    <p className='md:text-lg text-[3vw] text-slate-400 font-bold p-1'>REACT.js</p>
                </div>
            </motion.div>
            <motion.div 
            variants={childVariant}
            className='flex justify-center items-center bg-slate-800 rounded-sm border border-slate-600 p-1'>
                <div className='px-1 md:w-[50px] min-w-[20px] w-[30px]'>
                <Image
                src={nextjs}
                width={50}
                height={50}
                quality={80}
                loading='lazy'
                alt='Nextjs'
                className='opacity-80'
                />
                </div>
                <div className='px-1'>
                    <p className='md:text-lg text-[3vw] text-slate-400 font-bold p-1'>NEXT.js</p>
                </div>
            </motion.div>
            <motion.div 
            variants={childVariant}
            className='flex justify-center items-center bg-slate-800 rounded-sm border border-slate-600 p-1'>
                <div className='px-1 md:w-[50px] min-w-[20px] w-[30px]'>
                <Image
                src={tailwindcss}
                width={50}
                height={50}
                quality={80}
                loading='lazy'
                alt='Tailwind'
                className='opacity-80'
                />
                </div>
                <div className='px-1'>
                    <p className='md:text-lg text-[3vw] text-slate-400 font-bold p-1'>TAILWIND</p>
                </div>
            </motion.div>
            <motion.div 
            variants={childVariant}
            className='flex justify-center items-center bg-slate-800 rounded-sm border border-slate-600 p-1'>
                <div className='px-1 md:w-[50px] min-w-[20px] w-[30px]'>
                <Image
                src={firebaseicon}
                width={50}
                height={50}
                quality={80}
                loading='lazy'
                alt='Firebase'
                className='opacity-80'
                />
                </div>
                <div className='px-1'>
                    <p className='md:text-lg text-[3vw] text-slate-400 font-bold p-1'>FIREBASE</p>
                </div>
            </motion.div>
            
        </motion.div>
        <h1 className='text-left w-full font-bold text-cyan-500 md:text-2xl text-sm mt-10'>Professional Development</h1>
        <motion.div 
        variants={containerVariant}
        initial="initial"
        whileInView='show'
        className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-2 mb-10 mt-2 p-3'>
            {cert?.map(item => (
                <Link key={item.title} href={item.link} target="_blank" className='cursor-pointer'>
                <motion.div 
                variants={childVariant}
                whileHover={{rotateY: 10, backgroundColor: "lightseagreen", scale: 1.05}}
                className='flex justify-center items-center bg-slate-800 rounded-sm border border-slate-600 p-1'>
                <div className='p-1 md:max-w-[300px] md:min-w-[200px] min-w-[100px] w-[250px]'>
                <Image
                src={item.image}
                width={300}
                height={300}
                quality={80}
                loading='lazy'
                alt={item.title}
                className='opacity-80'
                />
                </div>
                </motion.div>
                </Link>
            ))}

            
        </motion.div>
        <div className='flex flex-col gap-2 items-start justify-start md:pb-36 pb-5 md:w-[80%] w-full'>
            <div>
                <h2 className='md:text-3xl text-lg font-extrabold text-slate-500 mb-5'>Contact me:</h2>
            </div>
            <Contacts/>
        </div>
    </div>
    </>
  )
}

export default About