import Section from "./Section";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  }
};

const Hero = () => {
  return (
    <Section
      id="home"
      className="!h-[calc(100vh-100px)] w-full relative bg-gradient-to-b from-[#0c0c1d] to-[#111132] overflow-hidden"
    >
      <div className="h-full max-w-[1024px] mx-auto">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col justify-center gap-[40px] h-full w-[50%]"
        >
          <motion.h2
            variants={textVariants}
            className="uppercase text-[30px] text-[rebeccapurple] tracking-[10px] font-semibold"
          >
            Omar mathias
          </motion.h2>
          <motion.h1
            variants={textVariants}
            className="capitalize text-[40px] font-bold md:text-[60px]"
          >
            web developer and UI Designer
          </motion.h1>
          <motion.div variants={textVariants}>
            <motion.button
              variants={textVariants}
              className="p-[20px] border border-white rounded-[10px] mr-[20px] font-[300]"
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="p-[20px] border border-white rounded-[10px] mr-[20px] font-[300] bg-white text-black"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            width={50}
          />
        </motion.div>
      </div>

      <motion.div variants={sliderVariants} initial="initial" animate="animate" className="absolute w-[50%] text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] font-bold">
        Writer Content Creator influencer
      </motion.div>
      <div className="h-full absolute top-0 right-0">
        <img src="/hero.png" alt="" />
      </div>
    </Section>
  );
};

export default Hero;
