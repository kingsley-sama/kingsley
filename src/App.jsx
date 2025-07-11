import { useState } from 'react'
import './App.css'
import { DragCards } from './pages/banner'
import { RevealBento } from './pages/aboutme'
import { HoverImageLinks } from './pages/menu'
import Projects from './pages/projects'
import NavBar from './pages/navbar'
import ContactForm from './pages/contact'
import { TechStacks } from './pages/tech_stacks'
import { BottomNavigation, CompactBottomNav } from './pages/bottomnav'
import DownBar from './components/footer'
import AboutMeComponent from './pages/service'
import {ReactLenis} from '@studio-freight/react-lenis'

function App() {

  return (
    <ReactLenis >
    <main className='bg-black'>
      <NavBar />
      <HoverImageLinks />
      <RevealBento />
      <AboutMeComponent />
      <Projects />
      <TechStacks />
      <ContactForm />
      <DragCards />
      <div className='md:hidden'>
        <CompactBottomNav />
      </div>
      <div className='hidden md:block'>
        <BottomNavigation />
      </div>
    <DownBar />

    </main>
    </ReactLenis>
  )
}

export default App
