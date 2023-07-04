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
import Link from "next/link"
import { DownloadURL } from "@/app/lib/dlUrl"
import { url } from "@/app/api/auth/[...nextauth]/route"
const Main = () => {
    const dl = url;

    console.log(dl);
  return (
    <>
    <div className='auto-container md:mt-32 mt-10 main md:grid md:grid-cols-2 '>
        <div id="contacts" className="relative sm:mb-0 mb-5">

            <Link href='#form' scroll={false}>
                <Image 
                src={mail}
                alt="mail"
                width={30}
                height={30}
                title="espinosarennieljun@gmail.com"
                className="contact-icon mail absolute md:right-9 md:top-20 right-3/4" />
            </Link>
            
                <Link href='https://www.linkedin.com/in/renniel-jun-espinosa-767947222' target='_blank'>
                        <Image 
                        src={linkedin}
                        alt="linkedin"
                        width={30}
                        height={30}
                        className="contact-icon linkedin absolute md:right-48 md:bottom-52 right-1/4 "
                        />
                </Link>
                 
                <Link href='https://github.com/Rennieljun' target='_blank'>
                    <Image 
                    src={github}
                    alt="github"
                    width={30}
                    height={30}
                    className="contact-icon github absolute md:right-72 md:bottom-28 right-1/3 bottom-20"
                    />
                </Link>
                
                <Link href='https://www.facebook.com/renniel2' target='_blank'>
                    <Image 
                    src={fb}
                    alt="fb"
                    width={30}
                    height={30}
                    className="contact-icon fb absolute md:right-64 md:bottom-10 right-3/4 bottom-16"
                    />
                </Link>
                
            <div 
            className="avatar-container">
                <div
                >
                <Image 
                src={devwave}
                width={300}
                height={500}
                alt="Profile avatar"
                className="avatar mx-auto md:mr-0 md:ml-auto"
                />
                </div>
                 
                <div className="flex">
                    <Link href={dl} target="_blank" className="resume mx-auto md:mr-14 md:ml-auto px-7 bg-slate-800 text-slate-500">
                        Download Resume
                    </Link>
                </div>
            </div>
           
        </div>
        <div className="hero-title flex flex-col">
            <h1 className="head_title heroname text-center md:text-left font-extrabold blue_gradient md:mt-auto md:mb-0">
            Renniel Jun Espinosa
            </h1>
            <p className="description herogreet text-center md:text-left text-slate-500">
                <span className="text-slate-300">
                    Hi!
                </span> {' '}
                I'm an aspiring developer, eager to enhance and improve my skills and knowledge and become an effective contributor in the world of technology.
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