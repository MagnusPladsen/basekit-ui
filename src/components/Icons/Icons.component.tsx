import {
  CircleAlert,
  CircleCheck,
  CircleHelp,
  CircleMinus,
  CirclePause,
  CirclePlay,
  CirclePlus,
  CircleX,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Loader2,
  SquareArrowOutUpRight,
  Search,
  Menu,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  CalendarDays,
} from "lucide-react";
import { BKIconProp } from "./Icons.type";

const iconList = {
  CircleMinus,
  CirclePlus,
  CircleX,
  CircleCheck,
  CirclePlay,
  CirclePause,
  CircleAlert,
  CircleHelp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Spinner: Loader2,
  Link: SquareArrowOutUpRight,
  Search,
  Menu,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Calendar: CalendarDays,
};

/**
 * The `Icon` function in TypeScript React renders an icon component based on the provided props such
 * as icon type, size, color, and class name.
 * @param  - The `Icon` function takes the following parameters:
 * @param {BKIconProp} icon - The `icon` prop is a string that is used to determine the icon to be displayed.
 * @param {number} size - The `size` prop is a number that is used to determine the size of the icon.
 * @param {string} color - The `color` prop is a string that is used to determine the color of the icon.
 * @param {string} className - The `className` prop is a string that is used to apply additional tailwind classes to the icon element.
 * @returns The `Icon` component is being returned. If the `IconComp` is not found in the `iconList`,
 * an empty fragment `<>` is returned. Otherwise, the `IconComp` component is returned with the
 * specified `size`, `color`, and `className` props.
 */

function Icon({
  icon,
  size,
  color,
  className,
}: {
  icon: BKIconProp;
  size?: number;
  color?: string;
  className?: string;
}) {
  const IconComp = iconList[icon];
  if (!IconComp) {
    return <></>;
  }
  return <IconComp size={size ?? 16} color={color} className={className} />;
}

export { iconList };
export default Icon;
