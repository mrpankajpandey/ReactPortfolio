import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Skill from './components/Skill'
import { Toaster } from 'react-hot-toast';


const App = () => {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
      if(theme === 'dark') {
        document.documentElement.classList.add("dark");
      }else{
        document.documentElement.classList.remove("dark");
      }
  }, [theme]);
  const handleSwitch = () =>{
    setTheme(theme  ==='dark' ? 'light' :'dark')
  
  }
  return (
    <>
    <div className='dark:bg-black dark:text-white'>

 
   <Navbar theme={handleSwitch}></Navbar>
    <Home></Home>
    <About></About>
    <Skill></Skill>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    </div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>

  )
}

export default App