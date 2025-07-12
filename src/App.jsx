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
import { ReactLenis } from '@studio-freight/react-lenis'

function App() {
  return (
    <ReactLenis 
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
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
