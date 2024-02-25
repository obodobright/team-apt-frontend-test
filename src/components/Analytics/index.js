import { BiStats } from "react-icons/bi";

export const Analytics = () => {
  return (
    <div className="px-24  justify-center  items-center flex-col   py-6">
      <h1 className="text-8xl pb-4 text-left font-normal">
        Maximize <span className="text-[#a3a2a2]">efficiency </span> <br /> with our intuitive
      </h1>
      <section className="flex pb-6 items-center justify-between">
        <div className="flex items-center relative justify-start">
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
        </div>
        <div className="max-w-[250px] whitespace-nowrap text-nowrap overflow-hidden py-5 rounded-[40px] bg-[#F6CF42]">
          <h1 className="text-6xl font-semibold">Analytics service</h1>
        </div>
      </section>
      <hr className="border my-4 border-[#f1f1f1]" />
      <div className="flex pt-6 pb-12 items-center justify-between">
        <h4 className="text-sm max-w-[600px]">
          Explore traffic sources page behaviour, conversions and more to gain deep insight into
          your audience. With us, your business doesn&apos;t just adopt - it evolves
        </h4>
        <div className="flex items-center justify-start gap-3">
          <button className="py-2 px-7 text-black rounded-lg text-xs font-medium bg-[#F2F2F2]">
            Request a demo
          </button>
          <button className="py-2 px-7 text-white rounded-lg text-xs font-medium bg-[#FE4A23]">
            Start for free
          </button>
        </div>
      </div>
    </div>
  );
};

// before:w-7 before:rotate-90 before:-top-4 before:-left-6 before:h-9 before:border-dotted before:border-[#FE4A23]  before:border-r-2 before:absolute before:content-['']
