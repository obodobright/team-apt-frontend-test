import { FaLink } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between bg-black py-2 px-3 rounded-2xl text-white">
      <div className="flex items-center justify-center ml-2 gap-2">
        <FaLink />
        <h3 className="font-medium text-lg">ramos</h3>
      </div>
      <div className="py-2  px-8 rounded-xl bg-[#252525]">
        <div className="flex items-center justify-center gap-8">
          <button>Dashboard</button>
          <button>Reports</button>
          <button>Document</button>
          <button>History</button>
          <button>Settings</button>
        </div>
      </div>
      <div>
        <button className="bg-white rounded-xl text-black py-2 font-normal px-6">Sign Up</button>
      </div>
    </nav>
  );
};
