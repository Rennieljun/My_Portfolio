import PojectList from "@/components/PojectList"
const Projects = () => {
  return (
    <div className='auto-container py-10 px-5 flex justify-center items-center flex-col'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 bg-slate-800 border border-slate-600 p-10 rounded-lg shadow-2xl shadow-black'>
            <PojectList />
        </div>
    </div>
  )
}

export default Projects