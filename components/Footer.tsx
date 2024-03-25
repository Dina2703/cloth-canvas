import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-center items-start gap-6 ">
          {" "}
          <div className="relative  w-[200px] transform  -translate-x-5 ">
            <Image
              src="/cloth_rack.png"
              alt="cloth canvas logo"
              width={88}
              height={16}
              className="object-contain   "
            />{" "}
            <span className="bg-orange-300 rounded-tl-md -skew-y-[26deg] rotate-[26deg] rounded-br-md  text-white lowercase italic px-2  text-[14px] shadow-sm absolute -bottom-1 left-12  ">
              Cloth Canvas
            </span>
          </div>
          <p className="text-sm  text-gray-700">
            Cloth Canvas 2023 <br />
            All rights reserevd &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.item} href={item.url} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-end flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 ">
        <p>@2024 Cloth Canvas. All Rights Reserved.</p>
        <div className="footer__copyrights-link ">
          <Link href="/">Privacy Policy</Link>
        </div>
        <div className="footer__copyrights-link">
          <Link href="/">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
