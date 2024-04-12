import { TooltipProps, TooltipProviderProps } from "@radix-ui/react-tooltip";

interface BKTooltipProps extends TooltipProviderProps, TooltipProps {
  children: React.ReactNode | string | React.ReactNode[];
  text: string;
  className?: string;
}

export type { BKTooltipProps };