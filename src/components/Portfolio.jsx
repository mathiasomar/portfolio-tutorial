import { useRef } from "react";
import Section from "./Section";
import { portfolios } from "./constants";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Single = ({ portfolio }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <Section>
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-screen-lg mx-auto h-full flex items-center justify-center gap-[50px]">
          <div style={{ flex: 1 }} className="h-[50%]" ref={ref}>
            <img
              className="object-cover w-full h-full"
              src={portfolio.img}
              alt=""
            />
          </div>
          <motion.div style={{ y, flex: 1 }} className="flex flex-col gap-[30px]">
            <h2 className="text-[62px]">{portfolio.title}</h2>
            <p className="text-[gray] text-[16px]">{portfolio.desc}</p>
            <button className="bg-orange-500 rounded-[10px] text-black p-[10px] w-[200px]">See Demo</button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className="relative">
      <div className="progress sticky top-0 left-0 pt-[50px] text-center text-orange-500 text-[36px]">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-[10px] bg-white"
        ></motion.div>
      </div>
      {portfolios.map((item) => (
        <Single portfolio={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
