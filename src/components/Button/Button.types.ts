import { icons } from "lucide-react";
import buttonVariants from "./Button.styles";
import { type VariantProps } from "class-variance-authority"

interface BKButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
  href?: string;
  disableDefaultIcon?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export type { BKButtonProps };
