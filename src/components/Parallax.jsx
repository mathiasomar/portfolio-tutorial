import { useRef } from "react";
import Section from "./Section";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <Section className="w-full">
      <div
        className={`${
          type === "services"
            ? "bg-gradient-to-b from-[#111132] to-[0c0c1d]"
            : "bg-gradient-to-b from-[#111132] to-[#505064]"
        } w-full h-full relative flex items-center justify-center overflow-hidden`}
        ref={ref}
      >
        <motion.h1 style={{ y: yText }} className="capitalize text-[100px]">
          {type === "services" ? "What we do?" : "what we did?"}
        </motion.h1>
        <motion.div className="absolute w-full h-full bg-[url('/mountains.png')] bg-cover bg-bottom z-30"></motion.div>
        <motion.div
          style={{ y: yBg, backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})` }}
          className="absolute w-full h-full bg-cover bg-bottom z-20"
        ></motion.div>
        <motion.div
          style={{ x: yBg }}
          className="absolute w-full h-full bg-[url('/stars.png')] bg-cover bg-bottom z-10"
        ></motion.div>
      </div>
    </Section>
  );
};

export default Parallax;
