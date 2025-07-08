import { motion } from "framer-motion";


function Heading({ title }) {
    return (  
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
          {title.split("").map((l, i) => (
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
    );
}

export default Heading;