"use client";
import Image from "next/image";
import { CustomBtn } from ".";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title ">
          Discover, shop, and style your wardrobe -- effortlessly and chic!
        </h1>
        <p className="hero__subtitle ">
          Dive into our selection of fashion staples, uncover timeless designs
          and premium fabrics, and let your personal style shine.
        </p>
        <CustomBtn
          title="Discover Styles"
          containerStyles="bg-primary-pink text-white rounded-full mt-10 shadow-clay-btn"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/cloth_rack.png"
            alt="hero"
            fill
            className="object-contain p-36"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
