'use client'
import Image from 'next/image'
import Link from 'next/link'
import { delay, motion} from 'framer-motion'
import view from '@/public/share-box-fill.svg'
import { slideleft, prev, title, projdes, blinking } from '@/app/Variants/Variants'
import { useEffect, useState } from 'react'
import { getDocData } from '@/app/api/auth/[...nextauth]/route'
import { Suspense } from 'react'


const Projects = () => {
    const [myProj, setMyProj] = useState([]);

    useEffect(() => {
        const data = getDocData();
        data.then((docs) => {
            setMyProj(docs.Projects);
        })
    }, [])
  return (
    <>
    <hr className='border-blue-950 pt-52' />
    <div className='px-4 max-w-full overflow-hidden flex justify-center items-center'>
        <div className='block'>
            <motion.h1 className='title font-bold text-slate-400 mb-16 text-center'
            variants={title}
            initial="initial"
            whileInView="show"
            viewport={{once: true}}
            >Projects</motion.h1>
        </div>
    </div>
    <ul>
    {myProj.length == 0 ? 
    <div className='auto-container pb-10 mb-5 grid md:grid-cols-2 grid-cols-1 gap-3 mt-52 opacity-50'> 
        <motion.h1 className='bg-slate-600 max-w-[50%] h-10 md:hidden rounded-[10px]' variants={blinking} animate="blink"></motion.h1>
        <div className='flex justify-center items-center'>
            <motion.div className='bg-slate-600 md:w-[300px] w-[200px] h-[400px] rounded-[10px]' 
            variants={blinking} animate="blink" transition={{delay: 0.2}}></motion.div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='w-full'>
                <motion.h1 className='md:block hidden bg-slate-600 max-w-[50%] h-10 rounded-[10px]' variants={blinking} animate="blink" transition={{delay: 0.4}}></motion.h1>
                <div className='w-full'>
                <motion.p variants={blinking} animate="blink" transition={{delay: 0.6}} className='bg-slate-600 max-w-full h-5 mt-2 rounded-[10px]'></motion.p>
                <motion.p variants={blinking} animate="blink" transition={{delay: 0.7}} className='bg-slate-600 max-w-full h-5 mt-2 rounded-[10px]'></motion.p>
                <motion.p variants={blinking} animate="blink" transition={{delay: 0.8}} className='bg-slate-600 max-w-full h-5 mt-2 rounded-[10px]'></motion.p>
                <motion.p variants={blinking} animate="blink" transition={{delay: 0.9}} className='bg-slate-600 max-w-full h-5 mt-2 rounded-[10px]'></motion.p>
                <motion.p variants={blinking} animate="blink" transition={{delay: 1}} className='bg-slate-600 max-w-full h-5 mt-2 rounded-[10px]'></motion.p>
                <motion.p variants={blinking} animate="blink" transition={{delay: 1}} className='bg-slate-600 max-w-full h-5 mt-2 rounded-[10px]'></motion.p>
                </div>
            </div>
        </div>
    </div>: ''}
    {myProj?.map((proj) => (
    <li key={proj.name} className="auto-container pb-10 mb-5 grid md:grid-cols-2 grid-cols-1 gap-3 mt-52">
        <motion.h1 className='title text-cyan-500 font-bold text-left mb-5 md:hidden'
        variants={projdes}
        initial="initial"
        whileInView="show"
        viewport={{once: true}}
        >{proj?.name}
        </motion.h1>
        <div className='flex relative justify-center items-center px-5 py-3'>
            <motion.div 
            variants={slideleft}
            initial="start"
            whileInView="show"
            whileHover="hover"
            viewport={{once: true}}
            className='md:w-[300px] w-[200px] flex justify-center items-center overflow-hidden  relative rounded-[10px] cursor-pointer'
            >
                <Suspense 
                fallback={<h3>Loading..</h3>}>
                <Image 
                src={proj.url} 
                width={300}
                height={400}
                quality={80}
                loading='lazy'
                placeholder={blur}
                alt={"this is a " + proj.name + " image"}
                 />
                 </Suspense>
                <motion.div className='absolute top-[20%] right-[10%] left-[10%] bottom-[20%] text-center flex justify-center items-center'
                variants={prev}
                initial="initial"
                whileHover="hover"
                >
                    <motion.h1 
                    className='visit font-bold text-white'
                    variants={prev}
                    whileHover="textHover"
                    ><Link href={proj.link} target="_blank">Visit</Link></motion.h1>
                </motion.div>
            </motion.div>
        </div>
        <div className='flex justify-center items-center'>
            <div>
                <motion.h1 className='title text-cyan-500 font-bold text-left md:block hidden'
                variants={projdes}
                initial="initial"
                whileInView="show"
                viewport={{once: true}}
                >{proj.name}</motion.h1>
            <motion.p className='desc text-slate-500 mt-5 text-left'
            variants={projdes}
            initial="des"
            whileInView="desShow"
            viewport={{once: true}}
            >{proj.description}</motion.p>
            <motion.div
             variants={projdes}
             initial="des"
             whileInView="desShow"
             viewport={{once: true}}

            >
                <Link 
                href={proj.link} 
                target="_blank"
                className='flex text-[#0074D3] mt-2'
                >Live Preview 
                <Image 
                alt="view icon"
                src={view}
                width={20}
                height={20}
                >
                </Image>
                </Link>
            </motion.div>
            </div>
        </div>
    </li>
    ))}
    </ul>
    </>
  )
}

export default Projects