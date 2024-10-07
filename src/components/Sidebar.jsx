import { useState } from "react";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={variants}
      animate={open ? "open" : "closed"}
      className="fixed z-50 top-0 left-0 w-[400px] h-screen bg-white text-black"
    >
      <Links />
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;
