import { useState } from 'react'
import './App.css'
import { SmoothScrollHero } from './pages/hero'
import { DragCards } from './pages/banner'
import { RevealBento } from './pages/aboutme'
import { HoverImageLinks } from './pages/menu'
import Projects from './pages/projects'
import NavBar from './pages/navbar'

function App() {

  return (
    <main className='bg-black'>
      <NavBar />
      <RevealBento />
      <HoverImageLinks />
      <Projects />
      <SmoothScrollHero />
      <DragCards />


    </main>
  )
}

export default App
