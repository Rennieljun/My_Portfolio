'use client'
import Image from "next/image"
import devwave from '../public/dev-ed-wave.png'
import fb from '../public/facebook-circle-fill.svg'
import github from '../public/github-fill.svg'
import linkedin from '../public/linkedin-box-fill.svg'
import mail from '../public/mail-fill.svg'
import html from '../public/html5-fill.svg'
import css from '../public/css3-fill.svg'
import javascript from '../public/javascript-fill.svg'
import reactjs from '../public/reactjs-fill.svg'
import nextjs from '../public/nextjs.svg'
import { motion } from "framer-motion"

const avatar = {
    show: {
        position: "fixed",
        top: 200,
        transition: {
            duration: 1,
            ease:  "linear"
        },
    }
}
const Main = () => {

  return (
    <>
    <div className='auto-container main md:grid md:grid-cols-2 '>
        <div className="relative sm:mb-0 mb-5">
            <Image 
                src={mail}
                alt="fb"
                width={30}
                height={30}
                className="contact-icon absolute md:right-9 md:top-20 right-3/4"
            />
            <Image 
                src={linkedin}
                alt="fb"
                width={30}
                height={30}
                className="contact-icon absolute md:right-48 md:bottom-52 right-1/4 "
            />
            <Image 
                src={github}
                alt="fb"
                width={30}
                height={30}
                className="contact-icon absolute md:right-72 md:bottom-28 right-1/3 bottom-20"
            />
            <Image 
                src={fb}
                alt="fb"
                width={30}
                height={30}
                className="contact-icon absolute md:right-64 md:bottom-10 right-3/4 bottom-16"
            />
            <div 
            className="avatar-container">
                <motion.div
                >
                    <Image 
                src={devwave}
                tag="waving avatar"
                width={300}
                height={500}
                className="avatar mx-auto md:mr-0 md:ml-auto"
                />
                </motion.div>
                 
                <div className="flex">
                    <button className="resume mx-auto md:mr-14 md:ml-auto px-7 bg-slate-800 text-slate-500">
                        Download Resume
                    </button>
                </div>
            </div>
           
        </div>
        <div className="hero-title flex flex-col">
            <h1 className="head_title text-center md:text-left font-extrabold blue_gradient md:mt-auto md:mb-0">
            Renniel Jun Espinosa
            </h1>
            <p className="description text-center md:text-left text-slate-500">
                <span className="text-slate-300">
                    Hi!
                </span> {' '}
                I'm an inspiring developer eager to enhance and improve my skills and knowledge to be an effective contributor in the world of technology.
            </p>
        </div>
    </div>
    <div className="auto-container flex justify-items-center items-center justify-center mt-10 overflow-hidden mb-60">
            <div className="flex gap-6">
                 <Image 
                src={html}
                alt="fb"
                width={30}
                height={30}
                className="skills"
                />
                 <Image 
                src={css}
                alt="fb"
                width={30}
                height={30}
                className="skills"
                />
                 <Image 
                src={javascript}
                alt="fb"
                width={30}
                height={30}
                className="skills"
                />
                 <Image 
                src={reactjs}
                alt="fb"
                width={30}
                height={30}
                className="skills"
                />
                 <Image 
                src={nextjs}
                alt="fb"
                width={30}
                height={30}
                className="skills"
                />
            </div>
    </div>
    </>
  )
}

export default Main