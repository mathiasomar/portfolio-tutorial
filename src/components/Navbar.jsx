import Section from "./Section";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const titleVariant = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ulVariants = {
  hidden: {
    opacity: 1,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const liVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Navbar = () => {
  return (
    <Section className="!h-[100px] w-full" id="home">
      <div className="h-full max-w-[1024px] mx-auto flex items-center justify-between">
        {/* Sidebar */}
        <Sidebar />

        <motion.span
          variants={titleVariant}
          initial="hidden"
          animate="visible"
          className="font-bold uppercase"
        >
          Ommy Dev
        </motion.span>
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate="visible"
          className="flex gap-[20px] items-center"
        >
          <motion.li variants={liVariants}>
            <a href="#" className="inline-block">
              <img src="/facebook.png" width={18} height={18} alt="" />
            </a>
          </motion.li>
          <motion.li variants={liVariants}>
            <a href="#" className="inline-block">
              <img src="/instagram.png" width={18} height={18} alt="" />
            </a>
          </motion.li>
          <motion.li variants={liVariants}>
            <a href="#" className="inline-block">
              <img src="/youtube.png" width={18} height={18} alt="" />
            </a>
          </motion.li>
          <motion.li variants={liVariants}>
            <a href="#" className="inline-block">
              <img src="/dribbble.png" width={18} height={18} alt="" />
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </Section>
  );
};

export default Navbar;
