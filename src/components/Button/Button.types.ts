import BKButtonIcons from "./components/Button.icons";
import buttonVariants from "./Button.styles";
import { type VariantProps } from "class-variance-authority";

type BKButtonArrowProp = "up" | "down" | "left" | "right";

type BKButtonIconProp = keyof typeof BKButtonIcons;

type BKButtonIconLocationProp = "left" | "right";

interface BKButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  disableDefaultIcon?: boolean;
  loading?: boolean;
  disableOnClickEffect?: boolean;
  arrow?: BKButtonArrowProp;
  icon?: BKButtonIconProp;
  iconLocation?: BKButtonIconLocationProp;
  iconSize?: number;
  iconColor?: string;
  iconClassName?: string;
}

export type {
  BKButtonProps,
  BKButtonArrowProp,
  BKButtonIconLocationProp,
  BKButtonIconProp,
};
