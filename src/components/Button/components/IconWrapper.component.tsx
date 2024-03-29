import { BKButtonIconProp, BKButtonIconLocationProp } from "../Button.types";
import BKButtonIcons, { showIcon } from "./Button.icons";

const IconWrapper = ({
  icon,
  iconColor,
  iconSize,
  iconClassName,
  iconLocation,
  children,
}: {
  icon?: BKButtonIconProp;
  iconColor?: string;
  iconSize?: number;
  iconClassName?: string;
  iconLocation?: BKButtonIconLocationProp;
  children: React.ReactNode;
}) => {
  if (!icon) {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center gap-2">
      {iconLocation === "left" &&
        showIcon(icon, iconSize, iconColor, iconClassName)}
      {children}
      {!iconLocation || iconLocation === "right" &&
        showIcon(icon, iconSize, iconColor, iconClassName)}
    </div>
  );
};

export default IconWrapper;
