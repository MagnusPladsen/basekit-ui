import React from "react";
import { BKButtonProps } from "./Button.types";

function Button({ children, primary = true }: BKButtonProps) {
  return <button className="bg-red-500">{children}</button>;
}

export default Button;
