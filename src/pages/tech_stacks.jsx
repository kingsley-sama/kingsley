"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Heading from "../components/header.jsx"

const TechStacks = () => {
  const containerRef = useRef(null)
  const frontendRef = useRef(null)
  const backendRef = useRef(null)
  const deploymentRef = useRef(null)
  const systemDesignRef = useRef(null)

  const [frontendIsInView, setFrontendIsInView] = useState(false)
  const [backendIsInView, setBackendIsInView] = useState(false)
  const [deploymentIsInView, setDeploymentIsInView] = useState(false)
  const [systemDesignIsInView, setSystemDesignIsInView] = useState(false)

  const frontendIsInViewCheck = useInView(frontendRef, { once: false, amount: 0.3 })
  const backendIsInViewCheck = useInView(backendRef, { once: false, amount: 0.3 })
  const deploymentIsInViewCheck = useInView(deploymentRef, { once: false, amount: 0.3 })
  const systemDesignIsInViewCheck = useInView(systemDesignRef, { once: false, amount: 0.3 })

  useEffect(() => {
    setFrontendIsInView(frontendIsInViewCheck)
  }, [frontendIsInViewCheck])

  useEffect(() => {
    setBackendIsInView(backendIsInViewCheck)
  }, [backendIsInViewCheck])

  useEffect(() => {
    setDeploymentIsInView(deploymentIsInViewCheck)
  }, [deploymentIsInViewCheck])

  useEffect(() => {
    setSystemDesignIsInView(systemDesignIsInViewCheck)
  }, [systemDesignIsInViewCheck])

  const frontendControls = useAnimation()
  const backendControls = useAnimation()
  const deploymentControls = useAnimation()
  const systemDesignControls = useAnimation()

  useEffect(() => {
    if (frontendIsInView) {
      frontendControls.start("visible")
    } else {
      frontendControls.start("hidden")
    }
  }, [frontendIsInView, frontendControls])

  useEffect(() => {
    if (backendIsInView) {
      backendControls.start("visible")
    } else {
      backendControls.start("hidden")
    }
  }, [backendIsInView, backendControls])

  useEffect(() => {
    if (deploymentIsInView) {
      deploymentControls.start("visible")
    } else {
      deploymentControls.start("hidden")
    }
  }, [deploymentIsInView, deploymentControls])

  useEffect(() => {
    if (systemDesignIsInView) {
      systemDesignControls.start("visible")
    } else {
      systemDesignControls.start("hidden")
    }
  }, [systemDesignIsInView, systemDesignControls])

  // Animation variants
  const listVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1], 
        delay: 0.1 + i * 0.05, 
      },
    }),
  }

  return (
    <div ref={containerRef} className='bg-neutral-950 p-4 mb-8 mt-8 md:p-8'>
      <Heading title="Tech Stacks" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 my-5 p-2.5 rounded-lg">
        <motion.ul
          ref={frontendRef}
          className="list-none p-5 rounded-lg transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          initial="hidden"
          animate={frontendControls}
          variants={listVariants}
        >
          <motion.h3 className="text-2xl mb-4 text-primary pb-2 uppercase md:text-xl" variants={headingVariants}>
            Frontend/UI
          </motion.h3>
          {["React.js", "TypeScript", "CSS/Sass", "Tailwind CSS", "Framer Motion"].map((item, i) => (
            <motion.li
              key={item}
              className="text-lg my-2.5 text-primary py-2 px-2.5 rounded-md transition-colors duration-200 ease-in-out hover:text-gray-600 hover:cursor-pointer md:text-base"
              custom={i}
              variants={itemVariants}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          ref={backendRef}
          className="list-none p-5 rounded-lg transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          initial="hidden"
          animate={backendControls}
          variants={listVariants}
        >
          <motion.h3 className="text-2xl mb-4 text-primary pb-2 uppercase md:text-xl" variants={headingVariants}>
            Backend
          </motion.h3>
          {["Node.js", "Express.js", "MongoDB", "Flask", "PostgreSQL"].map((item, i) => (
            <motion.li
              key={item}
              className="text-lg my-2.5 text-primary py-2 px-2.5 rounded-md transition-colors duration-200 ease-in-out hover:text-gray-600 hover:cursor-pointer md:text-base"
              custom={i}
              variants={itemVariants}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          ref={deploymentRef}
          className="list-none p-5 rounded-lg transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          initial="hidden"
          animate={deploymentControls}
          variants={listVariants}
        >
          <motion.h3 className="text-2xl mb-4 text-primary pb-2 uppercase md:text-xl" variants={headingVariants}>
            Deployment
          </motion.h3>
          {["Docker", "Jenkins", "Nginx", "GitHub Actions", "AWS"].map((item, i) => (
            <motion.li
              key={item}
              className="text-lg my-2.5 text-primary py-2 px-2.5 rounded-md transition-colors duration-200 ease-in-out hover:text-gray-600 hover:cursor-pointer md:text-base"
              custom={i}
              variants={itemVariants}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          ref={systemDesignRef}
          className="list-none p-5 rounded-lg transition-transform duration-200 ease-in-out hover:scale-[1.02]"
          initial="hidden"
          animate={systemDesignControls}
          variants={listVariants}
        >
          <motion.h3 className="text-2xl mb-4 text-primary pb-2 uppercase md:text-xl" variants={headingVariants}>
            System Design
          </motion.h3>
          {["Microservices", "REST APIs", "GraphQL", "Load Balancing", "Event-Driven Architecture"].map((item, i) => (
            <motion.li
              key={item}
              className="text-lg my-2.5 text-primary py-2 px-2.5 rounded-md transition-colors duration-200 ease-in-out hover:text-gray-600 hover:cursor-pointer md:text-base"
              custom={i}
              variants={itemVariants}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export { TechStacks }