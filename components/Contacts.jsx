'use client'
import { senContactForm } from '@/app/lib/api'
import React, { useState } from 'react'
import Link from 'next/link'
const values = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
const Contacts = () => {
    const [name, setName] = useState(values.name)
    const [email, setEmail] = useState(values.email)
    const [subject, setSubject] = useState(values.subject)
    const [message, setMessage] = useState(values.message)
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const onSub = async (e) => {
        e.preventDefault();

        try{ 
          setSending(true);
          await senContactForm(values)
        }catch(e){
          console.log(e)
        }finally{
          setTimeout(() => {
            setSending(false);
            setSuccess(true);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
          }, 700);
        }
       
    }

  return (
    <>
    <form id='form' action="/api/form" method='POST' className={`flex flex-col justify-center items-start px-5 py-10 w-full duration-500 ease-in-out ${success == true ? 'hidden' : ''} overflow-hidden`} onSubmit={onSub}>
        <label htmlFor="name" className='md:text-base text-sm text-slate-500 font-bold'>Name: </label>
        <input type="text" id='name' name='name' title='Please enter your name' minLength={2} maxLength={20} required value={name} onChange={(e)=> setName(values.name = e.target.value)} placeholder='enter your name...' className='md:text-base text-sm px-5 md:max-w-[40%] w-[70%] bg-slate-900 border-slate-600 border rounded-[5px] shadow-inner shadow-black placeholder-slate-700 focus:outline-cyan-600'/>
        <br />
        <label htmlFor="email" className='md:text-base text-sm text-slate-500 font-bold'>Email:</label>
        <input type="email" id='email' name='email' required value={email} onChange={(e)=> setEmail(values.email = e.target.value)} className='md:text-base text-sm px-5 md:max-w-[40%] w-[70%] bg-slate-900 border-slate-700 border rounded-[5px] shadow-inner shadow-black placeholder-slate-600 focus:outline-cyan-600' placeholder='enter your email...'/>
        <br />
        <label htmlFor="subject" className='md:text-base text-sm text-slate-500 font-bold'>Subject: </label>
        <input type="text" id='subject' name='subject' minLength={3} maxLength={50} required value={subject} onChange={(e)=> setSubject(values.subject = e.target.value)} className='md:text-lg text-base font-bold px-5 md:max-w-[60%] w-full bg-slate-900 border-slate-600 border rounded-[5px] shadow-inner shadow-black placeholder-slate-700 focus:outline-cyan-600' placeholder='Enter the subject..' />
        <br />
        <label htmlFor="message" className='md:text-base text-sm text-slate-500 font-bold'>Message: </label>
        <textarea name="message" id="message" cols="30" rows="10" required value={message} onChange={(e)=> setMessage(values.message = e.target.value)} className='md:text-base text-sm  md:w-[60%] w-full px-5 py-2 bg-slate-900 border border-slate-600 rounded-[10px] shadow-inner shadow-black placeholder-slate-700 focus:outline-cyan-600' placeholder='What is in your mind?...' />
        <br />  
        <div className='md:w-[60%] w-full mt-5 flex justify-end items-end'>
            <button type='submit' className={`bg-cyan-600 px-4 py-1 rounded-sm text-sm font-bold ${sending == true ? 'text-slate-600' : 'text-cyan-950'}`} disabled={sending == true ? true : false}>{sending == false ? 'Send' : 'Sending..'}</button>
        </div>
    </form>
          <div className={`w-full flex justify-center items-start flex-col gap-3 duration-1000 ease-in delay-700 ${success == true ? 'opacity-100' : 'opacity-0'}`} >
            <h1 className='text-2xl text-left text-slate-400 '>Thank you!, for contacting me.</h1>
            <p className='text-lg text-left text-green-500 font-bold'>Message sent</p>
            <Link href='/#form'>
            <button type='button' onClick={()=> setSuccess(false)} className='bg-cyan-600 px-4 py-1 rounded-sm text-sm font-bold text-cyan-950 '>Send another message</button>
            </Link>
          </div>
    </>
  )
}

export default Contacts