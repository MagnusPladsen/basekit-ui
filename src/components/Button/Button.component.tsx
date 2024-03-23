import React from "react";
import { CleanUIButtonProps } from "./Button.types";
import cleanUIButtonStyles from "./Button.styles";

function Button({ children, primary = true }: CleanUIButtonProps) {
  return (
    <button
      style={{
        ...(primary && cleanUIButtonStyles.primary),
      }}
    >
      {children}
    </button>
  );
}

export default Button;
