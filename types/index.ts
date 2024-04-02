import { MouseEventHandler } from "react";

export interface CustomBtnProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => avoid;
}

export interface ItemProps {
  id: number;
  imageUrl: string;
  name: string;
  brandName: string;
  price: {
    currency: string;
    current: {
      text: string;
      value: number;
    };
  };
}
