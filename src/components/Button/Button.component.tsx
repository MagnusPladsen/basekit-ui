import React from "react";
import { BKButtonProps } from "./Button.types";
import { cn } from "../../utils/cn";
import ButtonWrapper from "./ButtonWrapper.component";
import buttonClasses from "./Button.styles";

function Button({
  className,
  children,
  variant = "contained",
  href,
  ...otherProps
}: BKButtonProps) {
  return (
    <ButtonWrapper href={href}>
      <button className={buttonClasses(variant, className)} {...otherProps}>
        {children}
      </button>
    </ButtonWrapper>
  );
}

export default Button;
