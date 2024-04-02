"use client";
import { useState } from "react";
import Image from "next/image";
import { ItemProps } from "@/types";
import { CustomBtn } from ".";

interface ItemCardProps {
  item: ItemProps;
}

const ItemCard = ({ item }: ItemCardProps) => {
  console.log(item);
  const { id, imageUrl, name, brandName, price } = item;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 car-card__content-title>{name}</h2>
      </div>
      <p className="flex mt-6 text-[14px]  font-bold">
        <span>{price?.current?.text}</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src={`https://${imageUrl}`} width={50} height={50} alt={name} />
      </div>
      <div className="relative flex w-full mt-2"></div>
    </div>
  );
};

export default ItemCard;
