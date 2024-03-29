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
} from "lucide-react";
import { BKButtonIconProp } from "../Button.types";

const BKButtonIcons = {
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
};

function showIcon(
  icon: BKButtonIconProp,
  size?: number,
  color?: string,
  className?: string
) {
  const Icon = BKButtonIcons[icon];
  return <Icon size={size ?? 16} color={color} className={className} />;
}

export { showIcon };
export default BKButtonIcons;
