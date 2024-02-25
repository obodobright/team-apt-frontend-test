import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

export const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  const animationVariants = {
    hidden: { opacity: 0, y: 50, scale: 2.5 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  const childAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="min-h-[50vh] items-center justify-center flex pt-6 pb-14  flex-col">
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={mainControl}
        // transition={{ duration: 0.7, delay: 0.25 }}
        style={{ boxShadow: "0px 4px 24px -3px rgba(254,74,35,0.75)" }}
        className="w-[70px]  flex items-center justify-center h-[70px] rounded-3xl bg-[#FE4A23] shadow-2xl"
      >
        <FaLink color="#fff" fontSize={20} />
      </motion.div>
      <motion.div
        variants={childAnimationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center pt-6"
      >
        <h1 className="font-medium text-6xl mb-4">Get Started </h1>
        <p className="text-[#a3a2a2] text-base max-w-[350px] mb-7 font-extralight">
          Turn Information into advantage! Using Ramos today. Signup for a free trial.
        </p>
        <motion.div
          variants={childAnimationVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-2"
        >
          <motion.button
            variants={childAnimationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#F2F2F2] text-black rounded-xl py-2 text-sm font-semibold px-6"
          >
            Request a demo
          </motion.button>
          <motion.button
            variants={childAnimationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#fe4a23] text-white rounded-xl text-sm font-medium py-2 px-6"
          >
            Start for free
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
