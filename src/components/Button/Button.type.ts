import { ReactNode } from "react";

type ButtonType = {
  shape?: "circle" | undefined;
  children?: ReactNode;
  variant?: string;
  size?: "sm" | "lg";
};

export default ButtonType;
