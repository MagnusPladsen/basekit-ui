import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "../../utils/cn";
import { BKTooltipProps } from "./Tooltip.types";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

/**
 * The ToolTip function in TypeScript React renders a tooltip component with specified text and
 * styling.
 * @param {BKTooltipProps}  - The `ToolTip` function takes the following parameters:
 * @param {React.ReactNode} children - The content that will be wrapped by the tooltip.
 * @param {string} text - The text that will be displayed inside the tooltip.
 * @param {string} className - The class name for the tooltip content.
 * @param {number} skipDelayDuration - The duration from when the pointer enters the trigger until
 * the tooltip gets opened.
 * @param {boolean} defaultOpen - The default state of the tooltip.
 * @param {boolean} open - The state of the tooltip.
 * @param {number} delayDuration - The duration from when the pointer enters the trigger until the
 * tooltip gets opened.
 * @param {boolean} disableHoverableContent - When `true`, trying to hover the content will result
 * in the tooltip closing as the pointer leaves the trigger.
 * @returns The ToolTip function is returning a JSX structure that includes a TooltipProvider component
 * with a specified skipDelayDuration prop, a TooltipRoot component with otherProps spread, a
 * TooltipTrigger component wrapping the children, and a TooltipContent component with a paragraph
 * element containing the text prop.
 */
function ToolTip({ children, text, className, skipDelayDuration, ...otherProps }: BKTooltipProps) {
  return (
    <TooltipProvider skipDelayDuration={skipDelayDuration}>
      <TooltipRoot  {...otherProps}>
        <TooltipTrigger >{children}</TooltipTrigger>
        <TooltipContent className={className}>
          <p>{text}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}

export default ToolTip;
