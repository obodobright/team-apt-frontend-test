import { useEffect, useRef } from "react";
import {
  ConversionCard,
  IndicatorCard,
  SalesCard,
  SecondIndicatorCard,
  TopIndicatorCard,
} from "./cards";
import { motion, useAnimation, useInView } from "framer-motion";

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <div className="px-24  justify-center flex items-center flex-col   py-6">
      <motion.h1 className="text-8xl text-left font-normal">
        <motion.span
          animate={isInView ? "visible" : "hidden"}
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.25 }}
          initial="hidden"
        >
          {" "}
          We give you full
        </motion.span>{" "}
        <br />{" "}
        <motion.span
          variants={fadeInAnimationVariant}
          initial="initial"
          viewport={{
            once: true,
          }}
          whileInView="animate"
        >
          <span className="text-[#a3a2a2]">control </span> over your data
        </motion.span>{" "}
      </motion.h1>
      <section className="flex items-center justify-center gap-4  mt-12">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="border w-fit flex items-center max-w-lg shadow-lg justify-center bg-[#F9F9F9] flex-col rounded-2xl border-[#d1d1d1] "
        >
          <div className="flex items-center relative">
            <ConversionCard />
            <SalesCard />
          </div>
          <div className="text-center  pt-12 pb-8 px-9">
            <h3 className="text-lg pb-3 font-medium text-black">Improved Customer Service</h3>
            <p className="text-base">
              Analytics helps optimize service processes by providing information on how to improve
              interactions with customers and increase this satisfaction
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="border w-fit flex items-center max-w-lg shadow-lg justify-center bg-[#F9F9F9] flex-col rounded-2xl border-[#d1d1d1] "
        >
          <div className="pt-6 flex flex-col items-center relative">
            <TopIndicatorCard />
            <SecondIndicatorCard />
            <IndicatorCard />
          </div>
          <div className="text-center  pt-12 pb-8 px-9">
            <h3 className="text-lg pb-3 font-medium text-black">Monitoring key indicators</h3>
            <p className="text-base">
              Analytic platforms allow business to track KPIs, an important tool for measuring
              success and achieving goals.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
