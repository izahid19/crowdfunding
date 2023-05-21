import { useEffect, useRef } from 'react'
import AddButton from '../components/AddButton'
import CreateProject from '../components/CreateProject'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { loadProjects } from '../services/blockchain'
import { useGlobalState } from '../store'

//import "../index.css"


const Home = () => {
  const [projects] = useGlobalState('projects')
  
  useEffect(async () => {
    await loadProjects()
  }, [])
  return (
    <>
     <div className=''>


      <div classname="">                           
      <Hero />
      <Projects projects={projects} />
      <CreateProject />
      <AddButton />
      </div> 
      
      
     </div>
    </>
  )
}

export default Home
