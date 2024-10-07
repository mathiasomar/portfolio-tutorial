import { items } from "./constants";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggeredDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  return (
    <motion.div
      variants={variants}
      className="absolute w-full h-full flex flex-col items-center justify-center gap-[20px]"
    >
      {items.map((item, index) => (
        <motion.a
          href={item.url}
          key={index}
          className="text-[20px]"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
