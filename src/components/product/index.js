import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Product = () => {
  const textAnimation = {
    initial: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <main className="pb-0 pl-32 relative pt-16 rounded-t-[50px] bg-[#F9F9F9]  px-12 ">
      <section className="flex justify-center items-center ">
        <div className="flex-1 items-center justify-between rounded-full ">
          <p className="text-2xl font-medium pb-6">
            Turning data into real <br /> actions and ideas
          </p>
          <div className="flex py-2 gap-7 max-w-xs px-3 my-4  items-center justify-between rounded-full shadow">
            <p className="text-sm font-normal text-black ">Instant Insights</p>
            <div className="w-6 h-6 flex items-center justify-center bg-[#F2F2F2] rounded-full text-black">
              +
            </div>
          </div>
          <div className="flex py-2 gap-7 px-3 max-w-xs my-4 items-center justify-between rounded-full shadow">
            <p className="text-sm font-normal text-black ">AI technology</p>
            <div className="w-6 h-6 flex items-center justify-center bg-[#F2F2F2] rounded-full text-black">
              +
            </div>
          </div>
          <div className="flex py-2 gap-7 px-3 max-w-xs my-4 items-center justify-between rounded-full shadow">
            <p className="text-sm font-normal text-black ">Easy Integration</p>
            <div className="w-6 h-6 flex items-center justify-center bg-[#F2F2F2] rounded-full text-black">
              +
            </div>
          </div>
        </div>
        <div className="flex flex-1 relative items-center">
          <div className="border-[6px] relative z-50 top-28 left-20 border-black w-fit rounded-3xl">
            <img
              src="/image/img3.png"
              className="rounded-b-3xl object-cover w-40 rounded-t-3xl"
              alt=""
            />
          </div>
          <div className="  rounded-3xl">
            <img
              src="/image/img4.png"
              className="rounded-b-3xl object-cover w-[350px] rounded-t-3xl"
              alt=""
            />
          </div>
        </div>
      </section>
      <motion.h3
        ref={ref}
        initial="initial"
        animate={isInView ? "visible" : "initial"}
        transition={{ staggerChildren: 0.1 }}
        className="text-[16em]  text-left w-full relative -top-20  font-semibold text-[#FE4A23]"
      >
        {`Ramos`.split("").map((char, index) => (
          <motion.span className="inline-block" variants={textAnimation} key={index}>
            {char}
          </motion.span>
        ))}
      </motion.h3>
    </main>
  );
};
