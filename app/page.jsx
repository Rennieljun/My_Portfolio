import Main from '@/components/Main'
import Projects from '@/components/Projects'
import About from '@/components/About'


export default function Page(){

  return (
    <div className='px-[5%]'>
      <Main />
      <Projects/>
      <About/>
    </div>
  )
}