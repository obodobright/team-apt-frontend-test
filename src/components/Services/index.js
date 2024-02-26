import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaArrowUp } from "react-icons/fa";
import { WiTime8 } from "react-icons/wi";
import { motion, useInView } from "framer-motion";
import { animated } from "react-spring";
import StatAreaChart from "../graph";
import { useRef } from "react";
import { useCountingNumber } from "../animated/countingNumber";
export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section className="pb-12 pl-32 relative pt-16 rounded-t-[50px] bg-[#F9F9F9]  px-12 ">
      <motion.div
        animate="visible"
        // animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        initial="hidden"
        className="flex items-center justify-between"
      >
        <h3 className="font-medium max-w-[400px] text-black text-3xl">
          Your key to strategic success through analytics
        </h3>
        <p className="font-normal max-w-[350px] text-base ">
          Ready to exciting, instataneous, all accessible insights in real time?
        </p>
      </motion.div>
      <div className="flex pt-12 items-center justify-between  gap-2">
        <ServiceDetails />
        <TransactionDetails />
      </div>
      <motion.div
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.6 }}
        initial="hidden"
        className="mt-12 gap-8 w-full flex items-center justify-center"
      >
        <div className="flex items-end justify-start gap-2">
          <span className="text-xl font-normal">up to</span>
          <h1 className="text-8xl font-semibold">45%</h1>
        </div>
        <div className="max-w-lg">
          <p className="text-left">
            Increase your analytics efficiency by up to 45% unique algorithms provide insights from
            data, reduce time for analysis and save time for making important, informed decisions
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export const ServiceDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  const { number } = useCountingNumber(56);
  const { number: myNumber } = useCountingNumber(isInView ? 58 : 38, isInView);

  const progressAnimation = {
    initial: {
      width: 0,
    },
    visible: {
      width: "50%",
    },
  };

  return (
    <div className="">
      <motion.div
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
        initial="hidden"
        className=" w-fit shadow-lg rounded-2xl bg-white   border pt-6 pr-0 pl-6 pb-2 "
      >
        <div className=" flex items-start justify-between">
          <div className="p-2">
            <motion.button
              ref={ref}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: isInView ? 1.2 : 0.5, opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="py-2 mb-20 text-[8px] bg-[#FFD028] px-4 rounded-xl text-black font-medium shadow-lg"
            >
              Setting up reports
            </motion.button>
            <div className="max-w-[270px] pr-5">
              <motion.h3
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
                initial="hidden"
                className="font-medium mb-3 text-2xl"
              >
                Fast and easy access to analytics{" "}
              </motion.h3>
              <motion.p
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
                initial="hidden"
                className="text-xs max-w-[300px] text-[#a3a2a2]"
              >
                One platform is a comprehensive system of solutions that will be the first steps
                towards digitalization of your business!
              </motion.p>
            </div>
          </div>
          <div className="border rounded-2xl py-2 px-3 border-r-0 border-b-0 ">
            <h3 className="text-xs font-medium  pb-4">Sales statistics</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-start gap-2">
                <div className="w-10 shadow h-10 flex items-center justify-center rounded-full bg-[#fe4a23]">
                  <HiOutlineSquare3Stack3D color="#fff" />
                </div>
                <div>
                  <p className="text-[9px] text-[#a3a2a2]">Total profit</p>
                  <h3 className="text-xl font-medium">
                    <span className="text-base">$</span> 264.2k
                  </h3>
                </div>
              </div>
              <div className="p-2 w-[150px] bg-[#F2F2F2] rounded-md flex-1 ">
                <p className="text-[9px] font-normal pb-1">Visitors</p>

                <div className="h-1 w-full mb-3 flex-1 bg-[#a3a2a2] rounded-lg">
                  <motion.div
                    ref={ref}
                    animate={isInView ? "visible" : "initial"}
                    variants={progressAnimation}
                    initial="initial"
                    transition={{
                      duration: 3,
                    }}
                    className="w-1/12 rounded-lg h-full bg-[#42C681]"
                  ></motion.div>
                </div>

                <div className="relative">
                  <h3 className="text-xl">
                    <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>K
                  </h3>
                  <motion.div
                    ref={ref}
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    initial="hidden"
                    className="absolute flex gap-1 top-0 left-10"
                  >
                    <div className="w-4 h-4  flex items-center justify-center bg-[#42C780] rounded-full  ">
                      <FaArrowUp fontSize={8} color="#fff" />
                    </div>
                    <p className="text-[9px]">14%</p>
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="border mt-4 rounded-2xl pt-3 pb-2  px-3 relative ">
              <p className="text-[10px] font-semibold">Visit statistics</p>
              <StatAreaChart />
              <div className="absolute bottom-0 ">
                <div className="flex items-center gap-4 relative top-5 justify-start">
                  <span className="text-[9px] text-[#a3a2a2] ">Jan</span>
                  <span className="text-[9px] text-[#a3a2a2] ">Feb</span>
                  <span className="text-[9px] text-[#a3a2a2] ">Mar</span>
                  <span className="text-[9px] text-[#a3a2a2] "> Apr</span>
                  <span className="text-[9px] text-[#a3a2a2] ">May</span>
                  <div className="p-2 bg-[#fe4a23]  relative -top-6 rounded-lg">
                    <div className="flex items-center justify-between ">
                      <p className="text-[9px] text-white font-medium">Rate</p>
                      <WiTime8 color="#fff" />
                    </div>
                    <h3 className="text-3xl text-white font-medium">
                      <span className="font-normal text-base">+</span>
                      {/* myNumber */}
                      <animated.span>{myNumber.to((n) => n.toFixed(0))}</animated.span>%
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const TransactionDetails = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const { number } = useCountingNumber(isInView ? 43 : 33, isInView);

  return (
    <motion.section
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
      initial="hidden"
      className="rounded-2xl w-[40%] bg-black py-8 px-6"
    >
      <div className="flex items-center justify-center gap-1">
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: -15 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial="hidden"
          style={{ boxShadow: " 1px -1px 1px -5px rgba(255,255,255,0.75)" }}
          className="w-[150px] rounded-3xl flex-col h-[150px]  border border-[#4b4a4a] shadow flex items-center justify-center "
        >
          <HiOutlineSquare3Stack3D fontSize={30} color="#F6CF42" />
          <div className="flex items-center pt-4">
            <img src="/image/img1.png" alt="" />
            <img src="/image/img2.jpg" className="w-8 relative -left-2 h-8 rounded-full" alt="" />
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial="hidden"
          style={{ boxShadow: " -4px -3px 5px -5px rgba(255,255,255,0.75)" }}
          className="w-[150px] rounded-3xl py-5 px-4 flex items-start justify-center flex-col h-[150px]  border border-transparent  borde-[#4b4a4a] shadow "
        >
          <p className="text-[#A6A5A5] pb-5 text-xs">Transaction</p>
          <div className="relative">
            <h3 className="text-5xl text-left text-white">
              <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>k
            </h3>
            <div className="absolute flex gap-1 -top-3 left-[4.6rem]">
              <div className="w-4 h-4  flex items-center justify-center bg-[#42C780] rounded-full  ">
                <FaArrowUp fontSize={8} color="#fff" />
              </div>
              <p className="text-[#42C780] text-[9px]">+14%</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center pt-3 justify-center flex-col">
        <motion.h3
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial="hidden"
          className="text-white text-2xl"
        >
          Widget control
        </motion.h3>
        <motion.p
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
          initial="hidden"
          className="text-center text-base text-[#a3a2a2] pt-3"
        >
          Reports provide a comprehensive overview of important aspect of web analytics
        </motion.p>
      </div>
    </motion.section>
  );
};
