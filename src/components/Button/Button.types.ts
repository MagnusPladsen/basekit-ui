import { icons } from "lucide-react";
import buttonVariants from "./Button.styles";
import { type VariantProps } from "class-variance-authority";

type BKButtonArrowProps = "up" | "down" | "left" | "right";

interface BKButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  disableDefaultIcon?: boolean;
  loading?: boolean;
  disableOnClickEffect?: boolean;
  arrow?: BKButtonArrowProps,
}

export type { BKButtonProps };
