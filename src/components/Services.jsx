import { useRef } from "react";
import Section from "./Section";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const inView = useInView(ref, { margin: "-100px" });

  return (
    <Section id="services" className="w-full overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132]">
      <motion.div
        ref={ref}
        variants={variants}
        initial="initial"
        // whileInView="animate"
        animate={inView && "animate"}
        className="h-full max-w-[1024px] mx-auto flex flex-col justify-between"
      >
        <motion.div
          variants={variants}
          style={{ flex: 1, alignSelf: "flex-end" }}
          className="flex items-center gap-[20px]"
        >
          <p className="font-[200] text-[14px] text-[gray]">
            I focus on helping your brand grow
            <br /> and move forward
          </p>
          <hr
            className="w-[100px] border-t-[0.5] border-[gray]"
            style={{ textAlign: "right" }}
          />
        </motion.div>
        <motion.div
          variants={variants}
          style={{ flex: 2 }}
          className="flex flex-col items-center "
        >
          <div className="flex items-center gap-[50px]">
            <img
              src="/people.webp"
              alt=""
              className="w-[300px] h-[100px] rounded-[50px] object-cover"
            />
            <h1 className="text-[70px] font-[100]">
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="flex items-center gap-[50px]">
            <h1 className="text-[70px] font-[100]">
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
            </h1>
            <button className="w-[300px] h-[100px] rounded-[50px] bg-orange-500 border-none text-[24px] uppercase text-black">
              what we do
            </button>
          </div>
        </motion.div>
        <motion.div variants={variants} style={{ flex: 2 }} className="flex">
          <motion.div
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
            className="p-[20px] border border-[gray] flex flex-col justify-between"
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              suscipit pariatur neque. Deleniti, quaerat veniam!
            </p>
            <button className="p-[10px] bg-orange-500 text-black uppercase border-none cursor-pointer">
              go
            </button>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
            className="p-[20px] border border-[gray] flex flex-col justify-between"
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              suscipit pariatur neque. Deleniti, quaerat veniam!
            </p>
            <button className="p-[10px] bg-orange-500 text-black uppercase border-none cursor-pointer">
              go
            </button>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
            className="p-[20px] border border-[gray] flex flex-col justify-between"
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              suscipit pariatur neque. Deleniti, quaerat veniam!
            </p>
            <button className="p-[10px] bg-orange-500 text-black uppercase border-none cursor-pointer">
              go
            </button>
          </motion.div>
          <motion.div
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
            className="p-[20px] border border-[gray] flex flex-col justify-between"
          >
            <h2>Branding</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
              suscipit pariatur neque. Deleniti, quaerat veniam!
            </p>
            <button className="p-[10px] bg-orange-500 text-black uppercase border-none cursor-pointer">
              go
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Services;
