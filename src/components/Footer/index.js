import Link from "next/link";
import { FooterLink } from "./footerLink";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <footer ref={ref} className="bg-black pt-20 px-10 pb-8">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex items-center pb-10 justify-between "
      >
        <section>
          <ul className="flex  items-center text-left  ">
            <FooterLink cls="ml-0" link="/about">
              About
            </FooterLink>
            <FooterLink link="/why-us">Why us</FooterLink>
            <FooterLink link="/platform">Platform</FooterLink>
            <FooterLink link="/pricing">Pricing</FooterLink>
            <FooterLink link="/contacts">Contacts</FooterLink>
          </ul>
        </section>
        <motion.h1 className="text-4xl text-white  font-bold">hello@ramos.com</motion.h1>
      </motion.div>
      <hr className="block h-1  border-t-1 border-[#666666]" />
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-start justify-between pt-8"
      >
        <div className="flex items-center justify-start gap-12">
          <div>
            <h3 className="text-base text-white font-normal">Warrenvile Heights</h3>
            <p className="text-sm font-light text-[#a3a2a2]">1441B Vineyard Drive, NC</p>
            <span className="text-sm font-light text-[#a3a2a2]">44128</span>
          </div>
          <div>
            <h3 className="text-base text-white font-normal">Saint Louis</h3>
            <p className="text-sm font-light text-[#a3a2a2]">1366 Pen street</p>
            <span className="text-sm font-light text-[#a3a2a2]">63101</span>
          </div>
        </div>
        <ul>
          <li className="text-base my-3 text-white font-normal">
            <Link href="#">LinkedIn</Link>
          </li>
          <li className="text-base my-3 text-white font-normal">
            <Link href="#">Instagram</Link>
          </li>
          <li className="text-base my-3 text-white font-normal">
            <Link href="#">Facebook</Link>
          </li>
        </ul>
      </motion.section>
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center pt-5 justify-between"
      >
        <div className="relative w-fit">
          <h3 className="text-9xl text-white">
            Ramos{" "}
            <span className="text-sm font-bold absolute top-5 border-2  rounded-full w-6 flex items-center justify-center -right-5 h-6 ">
              R
            </span>{" "}
          </h3>
        </div>
        <div className="flex items-center justify-center ">
          <FooterLink cls="mx-0" link="/why-us">
            Privacy Policy
          </FooterLink>
          <FooterLink cls="mx-0" link="/platform">
            Licence agreement
          </FooterLink>
        </div>
        <div className="w-[120px] h-[120px] bg-white rounded"></div>
      </motion.section>
    </footer>
  );
};
