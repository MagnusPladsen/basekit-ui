import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Loader2,
  SquareArrowOutUpRight,
} from "lucide-react";
import React from "react";
import { cn } from "../../utils/cn";
import { BKIconLocationProp, BKIconProp } from "../Icons/Icons.type";
import buttonVariants from "./Button.styles";
import {
  BKButtonProps,
} from "./Button.types";
import ButtonWrapper from "./components/ButtonWrapper.component";
import IconWrapper from "./components/IconWrapper.component";

/**
 * The Button component renders a button element with specified props and styling.
 * @param {BKButtonProps}  - The `Button` component takes the following parameters:
 * @param {string} className - The className prop is a string that is used to apply additional tailwind classes to the button element.
 * @param {ReactNode} children - The children prop is a ReactNode that is used to render the content of the button element.
 * @param {BKButtonVariant} variant - The variant prop is a string that is used to determine the styling of the button element. It can be one of the following values: "contained", "outlined", or "text".
 * @param {string} href - The href prop is a string that is used to determine the href attribute of the button element. If the href prop is provided, the button element will be rendered as an anchor element with the specified href attribute.
 * @param {boolean} disableDefaultIcon - The disableIcon prop is a boolean that is used to determine whether the default icon, if any, should be rendered. DefaultIcon is rendered if specified variant has an icon.
 * @param {boolean} loading - The loading prop is a boolean that is used to determine whether the loading spinner should be rendered.
 * @param {BKIconProp} icon - The icon prop is a string that is used to determine the icon to be displayed.
 * @param {BKIconLocationProp} iconLocation - The iconLocation prop is a string that is used to determine the location of the icon. It can be one of the following values: "left" or "right".
 * @param {number} iconSize - The iconSize prop is a number that is used to determine the size of the icon.
 * @param {string} iconColor - The iconColor prop is a string that is used to determine the color of the icon.
 * @param {string} iconClassName - The iconClassName prop is a string that is used to apply additional tailwind classes to the icon element.
 * @param {BKButtonArrowProp} arrow - The arrow prop is a string that is used to determine the direction of the arrow icon. It can be one of the following values: "up", "down", "left", or "right".
 * @returns The `Button` component is being returned. It renders a button element with the specified
 */

const Button = React.forwardRef<HTMLButtonElement, BKButtonProps>(
  (
    {
      className,
      variant,
      size,
      href,
      children,
      disableDefaultIcon,
      loading,
      disabled,
      disableOnClickEffect,
      arrow,
      icon,
      iconLocation = "right",
      iconSize = 16,
      iconColor,
      iconClassName,
      ...props
    },
    ref
  ) => {
    const iconProps = {
      iconSize,
      iconColor,
      iconClassName,
      iconLocation,
      icon,
    };
    const showArrow = arrow && !icon && !disableDefaultIcon;
    return (
      <ButtonWrapper href={href}>
        <button
          aria-label="button"
          className={cn(
            buttonVariants({ variant, size, className, disableOnClickEffect })
          )}
          ref={ref}
          disabled={loading || disabled}
          {...props}
        >
          {showArrow && arrow === "up" && (
            <ArrowUp size={iconSize} />
          )}
          {showArrow && arrow === "left" && (
            <ArrowLeft size={iconSize} />
          )}
          <IconWrapper {...iconProps}>{children}</IconWrapper>
          {!disableDefaultIcon && variant === "link" && (
            <SquareArrowOutUpRight size={iconSize} />
          )}
          {!disableDefaultIcon && loading && (
            <Loader2
              size={24}
              className="animate-spin absolute top-[50%] left-[50%] mt-[-12px] ml-[-12px]"
            />
          )}
          {showArrow && arrow === "right" && (
            <ArrowRight size={iconSize} />
          )}
          {showArrow && arrow === "down" && (
            <ArrowDown size={iconSize} />
          )}
        </button>
      </ButtonWrapper>
    );
  }
);

export default Button;
