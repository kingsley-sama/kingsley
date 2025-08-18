import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Animated3DWrapper from './animated_3d_wrapper'

interface ProjectCardProps {
  header: string;
  link: string;
  image: string;
  text: string;
}

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
        <div className="container mx-auto px-4 max-w-6xl mt-20">
            <Animated3DWrapper className="bg-neutral-950 rounded-2xl shadow-2xl overflow-hidden">
                {({ isHovered, mousePosition }) => (
                    <div className='p-4 mb-8 mt-8 md:p-8'>
                        <div className="flex justify-end mb-8">
                            <span className={`text-4xl font-bold transition-colors duration-300 ${
                                isHovered ? 'text-green-100' : 'text-gray-500'
                            }`}>
                                03
                            </span>
                        </div>
                        <div>
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
            <div className="flex flex-wrap gap-6 justify-center">
            {
                projects.map((project, index)=><ProjectCard 
                key={index}
                header={project.title} 
                link={project.link} 
                image={project.image} 
                text={project.desc}/>)
            }
          </div>
        </div>
                )}
            </Animated3DWrapper>
        </div>
    )
}

export default Projects

const ProjectCard = ({ header, link, image, text }: ProjectCardProps) => {
    
    const [isHovered, setIsHovered] = useState(false)
  
    return (
        <div
          id='projects'
          className="grid grid-cols-2 grid-rows-2 h-[250px] w-full relative overflow-hidden max-w-[280px] rounded-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <div className="bg-black col-span-2 row-span-1 flex flex-col justify-center items-start pl-3">
            <h3 className='font-semibold text-sm mb-1'>{header}</h3>
            <p className='text-neutral-400 text-xs'>{text}</p>
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
            <Image 
              src={image} 
              alt={header} 
              fill
              style={{ objectFit: "cover" }}
              className='h-[100%]'
            />
          </div>
          <div className="col-start-2 text-black row-start-2 p-1.5 flex items-center justify-center bg-white">
            <a href={link} className="text-black hover:underline flex items-center gap-1 text-xs font-medium">
              VIEW LIVE<ExternalLink size={12} />
            </a>
          </div>
        </div>
      )
}
  
  