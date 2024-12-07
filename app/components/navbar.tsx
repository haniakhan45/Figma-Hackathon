

export default function Navbar() {
    return (
      <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-[100%]">
        <div className="bg-purple-700 text-white py-2 text-sm flex justify-between">
          <div className="text-center flex-1">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#" className="underline hover:text-slate-300 ml-2">
              Shop Now
            </a>
          </div>
          <div className="flex items-center gap-[2px]">
            <div className="text-white text-sm font-normal leading-[21px] hover:text-gray-300">
              English
            </div>
            {/* <RiArrowDropDownLine className="text-white text-4xl" /> */}
          </div>
        </div>
      </header>
    );
  }
  