import { ClassValue } from "clsx";
import { cn } from "../../utils/cn";
import { BKButtonVariant } from "./Button.types";

function buttonClasses(variant: BKButtonVariant, className?: string) {
  const containedClasses = {
    "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md":
      variant === "contained",
  };

  const outlinedClasses = {
    "border-blue-500 text-blue-500": variant === "outlined",
  };

  const textClasses = {
    "border-transparent": variant === "text",
  }

  const outlinedTextSharedClasses = {
    "bg-inherit text-blue-500 hover:bg-blue-50":
      variant === "outlined" || variant === "text",
  };

  const sharedClasses = "border rounded py-1.5 px-4 transition-all";

  return cn([
    containedClasses,
    outlinedClasses,
    textClasses,
    outlinedTextSharedClasses,
    sharedClasses,
    className,
  ]);
}

export default buttonClasses;
