import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Animated3DWrapper from './animated_3d_wrapper';

export const SiteMap = () => {
  return (
    <div className="container mx-auto px-4 max-w-6xl mt-20">
      <Animated3DWrapper className="bg-neutral-950 rounded-2xl shadow-2xl overflow-hidden">
        {({ isHovered, mousePosition }) => (
          <section className="p-4 md:p-8">
            <div className="mx-auto max-w-5xl">
              {/* Simple number indicator like in about.tsx */}
              <div className="flex justify-end mb-8">
                <span className={`text-4xl font-bold transition-colors duration-300 ${
                  isHovered ? 'text-green-100' : 'text-gray-500'
                }`}>
                  06
                </span>
              </div>
              
              <Link
          heading="About Me"
          subheading="My intersts and experiences"
          imgSrc="/"
          href="#about-me"
        />
        <Link
          heading="Experience"
          subheading="I have worked with great Companies"
          imgSrc="/imgs/random/6.jpg"
          href="#projects"
        />
         <Link
          heading="Contact"
          subheading="I have certifications to back my qualification"
          imgSrc="/imgs/random/5.jpg"
          href="#contact-me"
        />
        <Link
          heading="Skills"
          subheading="Tools I've worked with"
          imgSrc="/imgs/random/4.jpg"
          href="#skills"
        />
        <Link
          heading="Fun"
          subheading="I wind down with great activities"
          imgSrc="/imgs/random/10.jpg"
          href="/#fun"
        />
      </div>
    </section>
        )}
      </Animated3DWrapper>
    </div>
  );
};

import type { StaticImageData } from "next/image";

interface LinkProps {
    heading: string;
    imgSrc: string | StaticImageData;
    subheading: string;
    href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

interface HandleMouseMoveEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

const handleMouseMove = (e: HandleMouseMoveEvent): void => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
};

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-green-100 md:text-6xl"
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

      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute z-0"
      >
        <Image
          src={imgSrc}
          width={256}
          height={192}
          className="h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
          alt={`Image representing a link for ${heading}`}
        />
      </motion.div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <ArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};