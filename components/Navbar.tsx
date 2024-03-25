import Link from "next/link";
import Image from "next/image";

import { CustomBtn } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-end sm:px-16 px-6 py-4 ">
        <Link href="/" className="">
          <div className="relative  w-[200px]">
            <Image
              src="/cloth_rack.png"
              alt="cloth canvas logo"
              width={118}
              height={18}
              className="object-contain"
            />{" "}
            <span className="bg-orange-300 rounded-tl-md -skew-y-[26deg] rotate-[26deg] rounded-br-md  text-white lowercase italic px-2 shadow-sm absolute -bottom-1 left-16  ">
              Cloth Canvas
            </span>
          </div>
        </Link>
        <CustomBtn
          title="Sign In"
          btnType="button"
          containerStyles="font-bold text-white rounded-full  min-w-[100px]  text-sm  h-10 shadow-clay-btn bg-primary-pink"
        />
      </nav>
    </header>
  );
};

export default Navbar;
