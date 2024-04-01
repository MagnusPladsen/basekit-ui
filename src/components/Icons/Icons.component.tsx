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

const BKIcons = {
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
  Loader2,
  SquareArrowOutUpRight,
  Search,
  Menu,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  CalendarDays
};

function showIcon(
  icon: BKIconProp,
  size?: number,
  color?: string,
  className?: string
) {
  const Icon = BKIcons[icon];
  return <Icon size={size ?? 16} color={color} className={className} />;
}

export { showIcon };
export default BKIcons;
