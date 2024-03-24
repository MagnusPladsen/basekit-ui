import { cn } from "../../utils/cn";
import { BKButtonVariant } from "./Button.types";

function buttonClasses(variant: BKButtonVariant, className?: string) {
  const containedClasses = {
    "bg-primary text-inherit": variant === "contained",
  };

  const outlinedClasses = {
    "border-primary text-primary": variant === "outlined",
  };

  const outlinedTextSharedClasses = {
    "border-transparent bg-inherit text-primary":
      variant === "outlined" || variant === "text",
  };

  return cn([
    containedClasses,
    outlinedClasses,
    outlinedTextSharedClasses,
    "border rounded-sm py-1.5 px-4",
    className,
  ]);
}

export default buttonClasses;
