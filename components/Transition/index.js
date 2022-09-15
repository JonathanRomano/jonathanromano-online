import { motion, AnimatePresence } from "framer-motion";

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.3
    }
  },

  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.5
    }
  }
}

const Transition = ({ children }) => {
  return (
    <div className="effect-1">
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        <motion.div
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
          key={children.type.name}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>

  )
};

export default Transition;