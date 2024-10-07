import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
// import { motion } from "framer-motion";

const ToggleButton = ({ setOpen, open }) => {
  return (
    <button
      className="fixed top-[25px] left-[40px] w-[50px] h-[50px] rounded-full border-none transition duration-2000"
      onClick={() => setOpen((prev) => !prev)}
    >
      {open ? <FaTimes /> : <AiOutlineMenu />}
    </button>
  );
};

export default ToggleButton;
