/// <reference types="react" />
interface BKButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: BKButtonVariant;
    href?: string;
}
type BKButtonVariant = "contained" | "outlined" | "text";
export type { BKButtonProps, BKButtonVariant };
