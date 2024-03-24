import * as react_jsx_runtime from 'react/jsx-runtime';

interface BKButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: BKButtonVariant;
    href?: string;
}
type BKButtonVariant = "contained" | "outlined" | "text";

declare function Button({ className, children, variant, href, ...otherProps }: BKButtonProps): react_jsx_runtime.JSX.Element;

export { Button };
