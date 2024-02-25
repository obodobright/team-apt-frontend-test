import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaArrowUp } from "react-icons/fa";
import { WiTime8 } from "react-icons/wi";

import StatAreaChart from "../graph";
export const Services = () => {
  return (
    <section className="pb-12 pl-32 relative pt-16 rounded-t-[50px] bg-[#F9F9F9]  px-12 ">
      <div className="flex items-center justify-between">
        <h3 className="font-medium max-w-[400px] text-black text-3xl">
          Your key to strategic success through analytics
        </h3>
        <p className="font-normal max-w-[350px] text-base ">
          Ready to exciting, instataneous, all accessible insights in real time?
        </p>
      </div>
      <div className="flex pt-12 items-center justify-between  gap-2">
        <ServiceDetails />
        <TransactionDetails />
      </div>
    </section>
  );
};

export const ServiceDetails = () => {
  return (
    <div className="">
      <div className=" w-fit rounded-2xl bg-white   border pt-6 pr-0 pl-6 pb-2 ">
        <div className=" flex items-start justify-between">
          <div className="p-2">
            <button className="py-2 mb-20 text-[8px] bg-[#FFD028] px-4 rounded-xl text-black font-medium shadow-lg">
              Setting up reports
            </button>
            <div className="max-w-[270px] pr-5">
              <h3 className="font-medium mb-3 text-2xl">Fast and easy access to analytics </h3>
              <p className="text-xs max-w-[300px] text-[#a3a2a2]">
                One platform is a comprehensive system of solutions that will be the first steps
                towards digitalization of your business!
              </p>
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
                <div className="w-full mb-3 relative h-[3px] bg-[#a3a2a2] ">
                  <div className="w-[30%] h-[2px] bg-[#42C780] absolute"></div>
                </div>
                <div className="relative">
                  <h3 className="text-xl">56K</h3>
                  <div className="absolute flex gap-1 top-0 left-10">
                    <div className="w-4 h-4  flex items-center justify-center bg-[#42C780] rounded-full  ">
                      <FaArrowUp fontSize={8} color="#fff" />
                    </div>
                    <p className="text-[9px]">14%</p>
                  </div>
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
                      <span className="font-normal text-base">+</span> 58%
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TransactionDetails = () => {
  return (
    <section className="rounded-2xl w-[40%] bg-black py-8 px-6">
      <div className="flex items-center justify-center gap-1">
        <div
          style={{ boxShadow: " 1px -1px 1px -5px rgba(255,255,255,0.75)" }}
          className="w-[150px] rounded-3xl flex-col h-[150px]  border border-[#4b4a4a] shadow flex items-center justify-center "
        >
          <HiOutlineSquare3Stack3D fontSize={30} color="#F6CF42" />
          <div className="flex items-center pt-4">
            <img src="/image/img1.png" alt="" />
            <img src="/image/img2.jpg" className="w-8 relative -left-2 h-8 rounded-full" alt="" />
          </div>
        </div>
        <div
          style={{ boxShadow: " -4px -3px 5px -5px rgba(255,255,255,0.75)" }}
          className="w-[150px] rounded-3xl py-5 px-4 flex items-start justify-center flex-col h-[150px]  border border-transparent  borde-[#4b4a4a] shadow "
        >
          <p className="text-[#A6A5A5] pb-5 text-xs">Transaction</p>
          <div className="relative">
            <h3 className="text-5xl text-left text-white">43k</h3>
            <div className="absolute flex gap-1 -top-3 left-[4.6rem]">
              <div className="w-4 h-4  flex items-center justify-center bg-[#42C780] rounded-full  ">
                <FaArrowUp fontSize={8} color="#fff" />
              </div>
              <p className="text-[#42C780] text-[9px]">+14%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center pt-3 justify-center flex-col">
        <h3 className="text-white text-2xl">Widget control</h3>
        <p className="text-center text-base text-[#a3a2a2] pt-3">
          Reports provide a comprehensive overview of important aspect of web analytics
        </p>
      </div>
    </section>
  );
};
