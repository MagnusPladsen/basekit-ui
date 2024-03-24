import * as react_jsx_runtime from 'react/jsx-runtime';

interface BKButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    primary: boolean;
}

declare function Button({ children, primary }: BKButtonProps): react_jsx_runtime.JSX.Element;

export { Button };
