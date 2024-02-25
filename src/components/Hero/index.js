import { BiStats } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";
import { RiBarChartFill } from "react-icons/ri";

export const Hero = () => {
  return (
    <section className="px-24 overflow-hidden pt-24 pb-10 relative min-h-[50vh]">
      <section className="flex">
        <div>
          <div className="flex top-24  items-center absolute justify-start">
            <div className="w-[80px] relative  rounded-full h-[80px] bg-[#F2F2F2] flex items-center justify-center ">
              <IoIosFlash color="#FE4A23" fontSize={30} />
            </div>
            <div className="w-[80px] flex-col relative -left-4  rounded-full h-[80px] bg-[#FE4A23] flex items-center justify-center ">
              <BiStats color="#fff" fontSize={30} />
            </div>
          </div>{" "}
          <h1 className="text-8xl left-[160px]  relative pb-4  font-normal">
            <span className="relative ">Analytics </span>
            <br />
            <span className="relative -left-32">
              {" "}
              that <span className="text-[#a3a2a2]">helps </span> you
            </span>{" "}
            <br />{" "}
            <span className=" items-center gap-2 flex">
              shape
              <span className="w-[80px] relative  rounded-full h-[80px] bg-[#F6CF42] flex items-center justify-center ">
                <RiBarChartFill color="#F2F2F2" fontSize={30} />
              </span>
              the future
            </span>
          </h1>
        </div>
        <div className="absolute top-12 right-16">
          <img src="/image/laptop.png" className="relative" alt="" />
        </div>
      </section>
    </section>
  );
};
