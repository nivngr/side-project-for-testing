import { StaticImageData } from "next/image";

export interface IconButtonProps {
  icon: string;
  width: number;
  height: number;
  onClick?: () => void;
};
