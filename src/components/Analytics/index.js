import { BiStats } from "react-icons/bi";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export const Analytics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <div className="px-24  justify-center  items-center flex-col   py-6">
      <h1 ref={ref} className="text-8xl pb-4 text-left font-normal">
        <motion.span
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.25, staggerChildren: 0.1 }}
          initial="hidden"
        >
          Maximize <span className="text-[#a3a2a2]">efficiency </span>
        </motion.span>{" "}
        <br />
        <motion.span
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.35, staggerChildren: 0.1 }}
          initial="hidden"
        >
          with our intuitive
        </motion.span>
      </h1>
      <section className="flex pb-6 items-center justify-between">
        <motion.div
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.35 }}
          initial="hidden"
          className="flex items-center relative justify-start"
        >
          <div className="w-[100px] relative left-4  rounded-full h-[100px] bg-[#F2F2F2] flex items-center justify-center ">
            <div
              className="w-7 h-7   before:w-7 before:rotate-90 before:-top-4 before:-left-4 before:h-9 before:border-dotted before:border-[#FE4A23]  before:border-r-[1px] before:absolute before:content-['']
            relative after:w-7 after:rotate-90 after:-top-4 after:left-4 after:h-9 after:border-dotted after:border-[#FE4A23]  after:border-r-[1px] after:absolute after:content-[''] flex items-center justify-center rounded-lg bg-[#FE4A23]"
            >
              <BiStats color="#fff" fontSize={18} />
            </div>
          </div>
          <div className="w-[100px] flex-col rounded-full h-[100px] bg-[#F6CF42] flex items-center justify-center ">
            <h3 className="text-lg font-semibold">45%</h3>
            <p className="text-[8px] px-4 text-center">System grow faster</p>
          </div>
        </motion.div>
        <motion.div className="max-w-[250px] whitespace-nowrap text-nowrap overflow-hidden py-5 rounded-[40px] bg-[#F6CF42]">
          <motion.h1
            animate={{ x: "-100%" }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
            className="text-6xl font-semibold"
          >
            Analytics service
          </motion.h1>
        </motion.div>
      </section>
      <hr className="border my-4 border-[#f1f1f1]" />
      <div className="flex pt-6 pb-12 items-center justify-between">
        <motion.h4
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.35 }}
          initial="hidden"
          className="text-sm max-w-[600px]"
        >
          Explore traffic sources page behaviour, conversions and more to gain deep insight into
          your audience. With us, your business doesn&apos;t just adopt - it evolves
        </motion.h4>
        <motion.div
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.35 }}
          initial="hidden"
          className="flex items-center justify-start gap-3"
        >
          <button className="py-2 px-7 text-black rounded-lg text-xs font-medium bg-[#F2F2F2]">
            Request a demo
          </button>
          <button className="py-2 px-7 text-white rounded-lg text-xs font-medium bg-[#FE4A23]">
            Start for free
          </button>
        </motion.div>
      </div>
    </div>
  );
};

// before:w-7 before:rotate-90 before:-top-4 before:-left-6 before:h-9 before:border-dotted before:border-[#FE4A23]  before:border-r-2 before:absolute before:content-['']
