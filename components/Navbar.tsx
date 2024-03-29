import Link from "next/link";

import { CustomBtn } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-end sm:px-16 px-6 py-4 ">
        <Link href="/" className="">
          <CustomBtn
            title="Sign In"
            btnType="button"
            containerStyles="font-bold text-white rounded-full  min-w-[100px]  text-sm  h-10 shadow-clay-btn bg-primary-pink"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
