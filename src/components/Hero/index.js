import { BiStats } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";
import { RiBarChartFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { PiWaveform } from "react-icons/pi";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="px-24 overflow-hidden pt-44 pb-20 relative min-h-[50vh]">
      <section className="flex">
        <div>
          <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.9 }}
            initial="hidden"
            className="flex top-[175px] left-[185px]  items-center absolute justify-start"
          >
            <div className="w-[80px] relative  rounded-full h-[80px] bg-[#F2F2F2] flex items-center justify-center ">
              <IoIosFlash color="#FE4A23" fontSize={30} />
            </div>
            <div className="w-[80px] flex-col relative -left-4  rounded-full h-[80px] bg-[#FE4A23] flex items-center justify-center ">
              <BiStats color="#fff" fontSize={30} />
            </div>
          </motion.div>{" "}
          <h1 className="text-8xl left-[160px]  relative pb-4  font-normal">
            <motion.span
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: -40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              initial="hidden"
              className="relative left-[100px]  "
            >
              Analytics{" "}
            </motion.span>
            <br />
            <motion.span
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: -40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.25 }}
              initial="hidden"
              className="relative -left-32"
            >
              {" "}
              that <span className="text-[#a3a2a2]">helps </span> you
            </motion.span>{" "}
            <br />{" "}
            <motion.span
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
              initial="hidden"
              className=" relative left-12 items-center gap-2 flex"
            >
              shape
              <motion.span
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.9 }}
                initial="hidden"
                className="w-[80px] relative  rounded-full h-[80px] bg-[#F6CF42] flex items-center justify-center "
              >
                <PiWaveform color="#000" fontSize={30} />
              </motion.span>
              the future
            </motion.span>
          </h1>
        </div>
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.9 }}
          initial="hidden"
          className="absolute top-[150px] right-24"
        >
          <div className="relative">
            <img src="/image/laptop.png" className="relative w-[350px]" alt="" />
            <motion.div
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 1 }}
              initial="hidden"
              className="w-14 absolute -top-4 -left-5 h-14 flex items-center justify-center bg-[#FE4A23] rounded-full"
            >
              <FaPlay color="#fff" fontSize={20} />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};
