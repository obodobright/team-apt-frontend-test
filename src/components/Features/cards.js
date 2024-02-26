import Image from "next/image";
import { BiStats } from "react-icons/bi";
import { GiMatterStates } from "react-icons/gi";
import { TbGraph } from "react-icons/tb";
import { animated } from "react-spring";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useCountingNumber } from "../animated/countingNumber";

export const ConversionCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const iconControls = useAnimation();

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
    bouncing: {
      y: [0, -10, 0],
      transition: { duration: 0.5 },
    },
  };
  const containerVariants = {
    initial: {
      width: 0,
    },
    visible: {
      width: "100%",
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="py-8 px-8 rounded-2xl flex items-center justify-center flex-col shadow-sm mt-7 bg-white"
    >
      <p className="text-[10px] font-semibold pb-4 ">Conversion rate</p>
      <motion.div
        transition={{ duration: 6 }}
        className=" text-center w-full h-[60px] flex items-center relative  justify-center rounded-lg bg-[#fff] "
      >
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="visible"
          transition={{
            duration: 10,
          }}
          className="w-1/12 h-full  bg-[#FFD028]"
        >
          <p className="text-black p-2 text-4xl font-semibold">
            2.3<span className="text-2xl">%</span>
          </p>
        </motion.div>

        <motion.span
          variants={iconVariants}
          initial="hidden"
          animate={"visible"}
          onAnimationComplete={() => {
            iconControls.start("bouncing");
          }}
          className="absolute  w-7 -top-2 flex items-center justify-center -left-3 h-7 border-4 border-slate-200 rounded-full bg-white"
        >
          <BiStats fontSize={15} />
        </motion.span>
      </motion.div>
      <p className="w-[100px] text-center text-[#aaa9a9] pt-2 leading-4 text-[9px]">
        Percentage of website visitors
      </p>
    </motion.div>
  );
};

export const SalesCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const mainControl = useAnimation();
  const { number } = useCountingNumber(isInView ? 161 : 160, isInView);

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  const data = [
    { name: "Min price", img: "/image/img1.png", price: "1,200 $" },
    { name: "Max price", img: "/image/img2.jpg", price: "2,320 $" },
  ];
  const progressAnimation = {
    initial: {
      width: 0,
    },
    visible: {
      width: "100%",
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="py-3 w-[200px] relative top-7 -left-6 px-4 rounded-2xl  items-center justify-center flex-col shadow-2xl mt-7 bg-white"
    >
      <p className="text-xs text-[#aaa9a9]  font-semibold ">Sales revenue</p>
      <motion.h2 className="text-2xl font-medium">
        <span className="text-sm">$</span>
        <animated.span>{number.to((n) => n.toFixed(0))}</animated.span> K
      </motion.h2>
      <div className=" items-center flex justify-center my-3 gap-1">
        <div className="h-1 w-full flex-1 bg-[#fff] rounded-lg">
          <motion.div
            ref={ref}
            variants={progressAnimation}
            initial="initial"
            animate="visible"
            transition={{
              duration: 3,
            }}
            className="w-1/12 rounded-lg h-full bg-[#42C681]"
          ></motion.div>
        </div>
        <div className="h-1 flex-1 bg-[#fff] rounded-lg">
          <motion.div
            ref={ref}
            variants={progressAnimation}
            initial="initial"
            animate="visible"
            transition={{
              duration: 5,
              delay: 4,
            }}
            className="w-1/12 rounded-lg h-full bg-[#FFD028]"
          ></motion.div>
        </div>
        <div className="h-1 flex-1 bg-[#fff] rounded-lg">
          <motion.div
            ref={ref}
            variants={progressAnimation}
            initial="initial"
            animate="visible"
            transition={{
              duration: 5,
              delay: 8,
            }}
            className="w-1/12 rounded-lg h-full bg-[purple]"
          ></motion.div>
        </div>
      </div>
      <section className="pb-2">
        {data.map((dta, dtaIndex) => (
          <div key={dtaIndex} className="flex my-1  items-center justify-between">
            <div className="flex items-center justify-start gap-2">
              <div className="bg-transparent w-8 h-8 rounded-full items-center flex overflow-hidden justify-center ">
                <Image alt="img-1" src={dta.img} height={30} width={30} />
              </div>
              <p className="text-xs font-medium text-[#aaa9a9] ">{dta.name}</p>
            </div>
            <div className="text-xs font-semibold">{dta.price}</div>
          </div>
        ))}
      </section>
      <hr />
      <div className="flex items-center justify-between pt-3">
        <p className="text-xs font-medium text-[#aaa9a9] ">Engagement rate</p>
        <span className="text-xs font-semibold">47.84%</span>
      </div>
    </motion.div>
  );
};

export const TopIndicatorCard = () => {
  return (
    <div className="border rounded-t-2xl  shadow-sm relative w-[200px] border-b-0 bg-white h-[20px]"></div>
  );
};

export const SecondIndicatorCard = () => {
  return (
    <div className="border  rounded-t-2xl shadow-sm relative w-[250px] border-b-0 bg-white h-[35px]">
      <div className="flex justify-start gap-1 p-2 items-center">
        <div className="w-5  h-5 rounded-lg bg-[#F2F2F2] flex items-center justify-center">
          <GiMatterStates />
        </div>
        <h3 className="text-[9px]  font-medium">Finance reports</h3>
      </div>
    </div>
  );
};

export const IndicatorCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="border pb-2 rounded-t-2xl shadow-sm relative w-[300px] bg-white min-h-[30px]">
      <div className="flex p-2 items-center justify-start gap-1">
        <div className="w-6  h-6 rounded-lg bg-[#f1f1f1] flex items-center justify-center">
          <TbGraph />
        </div>
        <h3 className="text-[10px]  font-medium">Insights</h3>
      </div>
      <div className="py-3 flex items-center justify-between">
        <div className="px-3 pt-1">
          <p className="text-[#aaa9a9] text-xs font-normal pb-1">Total profit</p>
          <h2 className="font-medium pb-1 text-2xl ">
            <span className="text-lg">$</span> 264,2K
          </h2>
          <button className="text-[9px] font-semibold py-1 px-2 bg-[#F6CF42] rounded-md">
            Data Visualization
          </button>
        </div>
        <div className="px-3 relative flex items-end justify-start gap-2 pt-1">
          <div ref={ref} className="flex items-center justify-center gap-1 flex-col">
            <motion.div
              variants={{
                initial: {
                  height: 0,
                },
                visible: {
                  height: 48,
                },
              }}
              initial="initial"
              animate={isInView ? "visible" : "initial"}
              transition={{ duration: 2 }}
              className="w-5  bg-[#e2e0e0] rounded"
            ></motion.div>
            <p className="text-[8px] text-[#e2e0e0]">2021</p>
          </div>
          <div className="flex items-center justify-center gap-1 flex-col">
            <motion.div
              variants={{
                initial: {
                  height: 0,
                },
                visible: {
                  height: 20,
                },
              }}
              initial="initial"
              animate={isInView ? "visible" : "initial"}
              transition={{ duration: 2 }}
              className="w-5  bg-[#e2e0e0] rounded"
            ></motion.div>
            <p className="text-[8px] text-[#e2e0e0]">2020</p>
          </div>
          <div className="flex items-center justify-center gap-1 flex-col">
            <motion.div
              variants={{
                initial: {
                  height: 0,
                },
                visible: {
                  height: 48,
                },
              }}
              initial="initial"
              animate={isInView ? "visible" : "initial"}
              transition={{ duration: 2 }}
              className="w-5  bg-[#e2e0e0] rounded"
            ></motion.div>
            <p className="text-[8px] text-[#e2e0e0]">2019</p>
          </div>
          <div className="flex items-center relative justify-center gap-1 flex-col">
            <div className=" h-9 border-r-2 left-2 absolute -top-9 border-dotted border-[#f6cf42]">
              {}
            </div>
            <motion.div
              variants={{
                initial: {
                  height: 0,
                },
                visible: {
                  height: 64,
                },
              }}
              initial="initial"
              animate={isInView ? "visible" : "initial"}
              transition={{ duration: 2 }}
              className="w-5  bg-[#F6CF42] relative rounded"
            ></motion.div>
            <p className="text-[8px] text-[#e2e0e0]">2018</p>
          </div>
          <div className="flex items-center justify-center gap-1 flex-col">
            <motion.div
              variants={{
                initial: {
                  height: 0,
                },
                visible: {
                  height: 32,
                },
              }}
              initial="initial"
              animate={isInView ? "visible" : "initial"}
              transition={{ duration: 2 }}
              className="w-5  bg-[#e2e0e0] rounded"
            ></motion.div>
            <p className="text-[8px] text-[#e2e0e0]">2017</p>
          </div>
        </div>
      </div>
    </div>
  );
};
