'use client'
import Image from 'next/image'
import crypto from '@/public/ProjectCover/Cryptobase.png'
import Link from 'next/link'
import { motion} from 'framer-motion'


const Projects = () => {
    const slideleft = {
        start: {
            opacity: 0,
            x: -100,
            scale: 0,
            skewY: 0,
            boxShadow: "-5px -5px 5px black"
        },
        show: {
            opacity: 0.5,
            transition: {
                duration: 1,
                ease:  "easeOut"
            },
            x: 0,
            scale: 1,
            skewY: -10,
            boxShadow: "-20px -20px 5px black"        
        },
        hover: {
            opacity: 1,
            scale: 1.2,
            skewY: 0,
            boxShadow: "0px 0px 5px black" ,
            }
    }
    const prev = {
        initial: {
            borderRadius: "100%",
            opacity: 0,
        },
        hover: {
            opacity: 1,
            borderRadius: "100%",
        },
        textHover: {
            scale: 1.5,
        }
    }
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
    const projdes ={ 
        initial: {
            opacity: 0,
            scale: 0.3
        },

        show: {
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 0.5
            },
            opacity: 1, 
            scale: 1
        },
        
        des: {
            opacity: 0,
            y: 50,
        },

        desShow: {
            transition: {
                duration: 1, 
                ease: "easeIn",
                delay: 0.5
            },
            opacity: 1,
            y: 0
        }
    }
  return (
    <>
    <hr className='border-blue-950 pt-52' />
    <motion.h1 className='head_title font-bold text-slate-400 mb-16 text-center'
    variants={title}
    initial="initial"
    whileInView="show"
    >Projects</motion.h1>
    <div className="auto-container pb-72 grid md:grid-cols-2 grid-cols-1 gap-3 mt-52">
        <motion.h1 className='head_title text-cyan-500 font-bold text-left mb-5 md:hidden'
        variants={projdes}
        initial="initial"
        whileInView="show"
        >Cryptobase
        </motion.h1>
        <div className='flex relative justify-center items-center px-5 py-3'>
            <motion.div 
            variants={slideleft}
            initial="start"
            whileInView="show"
            whileHover="hover"
            className='md:w-[400px] w-[200px] flex justify-center items-center overflow-hidden  realtive rounded-[10px] cursor-pointer'
            >
                <Image src={crypto} width={400} height={500} alt="Cryptobaseproject" />
                <motion.div className='absolute top-[20%] right-[10%] left-[10%] bottom-[20%] text-center flex justify-center items-center'
                variants={prev}
                initial="initial"
                whileHover="hover"
                >
                    <motion.h1 
                    className='visit font-bold text-white'
                    variants={prev}
                    whileHover="textHover"
                    ><Link href="https://cryptobaseproj-4m0rs59kl-rennieljun.vercel.app" target="_blank">Visit</Link></motion.h1>
                </motion.div>
            </motion.div>
        </div>
        <div className='flex justify-center items-center'>
            <div>
                <motion.h1 className='head_title text-cyan-500 font-bold text-left md:block hidden'
                variants={projdes}
                initial="initial"
                whileInView="show"
                >Cryptobase</motion.h1>
            <motion.p className='description text-slate-500 mt-5 text-left'
            variants={projdes}
            initial="des"
            whileInView="desShow"
            >This is a fullstack project I built using the latest Next.js, firebase for database and the Coingecko Api to get crypto currency data.Cryptobase based on Coingecko website that monitor all the crypto currency and their prices, unlike Coingecko. Cyptobase only have limited functionality for the user to monitor limited pool of crypto currency and have a watchlist for their favorite crypto when they sign up an account the user can add or remove item in their list.</motion.p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Projects