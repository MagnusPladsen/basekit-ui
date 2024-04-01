import { BKIconLocationProp, BKIconProp } from "../Icons/Icons.type";
import buttonVariants from "./Button.styles";
import { type VariantProps } from "class-variance-authority";

type BKButtonArrowProp = "up" | "down" | "left" | "right";

interface BKButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  disableDefaultIcon?: boolean;
  loading?: boolean;
  disableOnClickEffect?: boolean;
  arrow?: BKButtonArrowProp;
  icon?: BKIconProp;
  iconLocation?: BKIconLocationProp;
  iconSize?: number;
  iconColor?: string;
  iconClassName?: string;
}

export type {
  BKButtonProps,
  BKButtonArrowProp,
};
