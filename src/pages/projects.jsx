import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { ArrowOutward, ArrowRightAltOutlined } from '@mui/icons-material'

const Projects = () => {
    const heading = "Projects"
    const projects = [
        {
            title:"Kizush Constructions",
            link:"https://kizushconstruction.com",
            image: "/projects/apple_website.webp",
            desc:""
        },
        {
            title:"Ezen",
            link:"",
            image: "/projects/music.webp",
            desc:""
        },
        {
            title:"",
            link:"",
            image: "/projects/hotelsandbooking.webp",
            desc:""
        },
        {
            title:"Odomiterentals",
            link:"https://odomiterentals.com",
            image: "/projects/odomite_rentals.png",
            desc:""
        }
    ]
    const subheading = "A collection of projects and experiences"
    return (
        <div className='bg-neutral-950 p-4 mb-8 mt-8 md:p-8'>

<div >
        <motion.span
          whileHover="whileHover"
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl m-10 font-bold text-neutral-500 transition-colors duration-500 hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
      </div>
            <div className="flex flex-wrap gap-10 ">
            {
                projects.map((project)=><ProjectCard header={project.title} 
                link={project.link} image={project.image} 
                text={project.desc}/>)
            }
          </div>
        </div>
    )
}

export default Projects
const ProjectCard =({header, link, image, text}) =>{
    
    const [isHovered, setIsHovered] = useState(false)
  
    return (
        <div
          id='projects'
          className="grid grid-cols-2 grid-rows-2 bg-neutral-50 h-[300px] w-full relative overflow-hidden max-w-[350px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
  
          <div className="bg-black col-span-2 row-span-1 flex flex-col justify-center items-start pl-5">
            <h3 className='font-bold mb-1'>Quantum Craft</h3>
            <p className='text-neutral-400'>Ecomerce, dropshiping</p>
          </div>
          <div
            className="absolute transition-all duration-500 ease-in-out"
            style={{
              top: isHovered ? "50%" : "0",
              left: isHovered ? "0" : "0",
              right: isHovered ? "50%" : "0",
              bottom: isHovered ? "0" : "0",
            }}
          >
          <img src={image} alt={header} layout="fill" objectFit="cover" className='h-[100%]'/>
          </div>
          <div className="col-start-2 text-black row-start-2 p-2 flex items-center justify-center bg-white">
            <a href={link} className="text-black hover:underline flex center">
              VIEW LIVE<ArrowOutward />
            </a>
          </div>
        </div>
      )
}
  
  