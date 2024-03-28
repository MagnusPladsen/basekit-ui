import buttonVariants from "./Button.styles";
import { type VariantProps } from "class-variance-authority"

interface BKButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
  href?: string;
}

export type { BKButtonProps };
