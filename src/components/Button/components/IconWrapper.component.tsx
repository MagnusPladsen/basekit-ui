import Icon from "../../Icons/Icons.component";
import { BKIconLocationProp, BKIconProp } from "../../Icons/Icons.type";


const IconWrapper = ({
  icon,
  iconColor,
  iconSize,
  iconClassName,
  iconLocation,
  children,
}: {
  icon?: BKIconProp;
  iconColor?: string;
  iconSize?: number;
  iconClassName?: string;
  iconLocation?: BKIconLocationProp;
  children: React.ReactNode;
}) => {
  if (!icon) {
    return <>{children}</>;
  }

  const iconProps = {
    iconSize,
    iconColor,
    iconClassName,
    iconLocation,
    icon,
  };

  return (
    <div className="flex items-center gap-2">
      {iconLocation === "left" && <Icon {...iconProps} />}
      {children}
      {!iconLocation || (iconLocation === "right" && <Icon {...iconProps} />)}
    </div>
  );
};

export default IconWrapper;
