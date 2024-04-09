import { cn } from "../../utils/cn";
import { Avatar } from "../Avatar/Avatar.component";
import { AvatarCardProps } from "./AvatarCard.types";
import { Phone, Mail } from "lucide-react";

function AvatarCard({
  name,
  image,
  bio,
  role,
  containerClassName,
  nameClassName,
  roleClassName,
  bioClassName,
  phone,
  email,
  phoneClassName,
  emailClassName,
  iconClassName,
}: AvatarCardProps) {
  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  }
  return (
    <div
      className={cn(
        "border rounded-lg p-4 bg-white shadow-md flex flex-col gap-4 w-fit max-w-sm",
        containerClassName
      )}
    >
      <div className="flex gap-4 items-center">
        <Avatar initials={getInitials(name)} src={image ?? undefined} />
        <div className="flex flex-col">
          <p className={cn("text-lg", nameClassName)}>{name}</p>
          {role && (
            <p
              className={cn(
                "text-xs text-primary-light truncate w-[250px]",
                roleClassName
              )}
            >
              {role}
            </p>
          )}
        </div>
      </div>
      {bio && <p className={cn("text-md w-full", bioClassName)}>{bio}</p>}
      {(!!phone || !!email) && (
        <div className="flex justify-between text-xs text-gray-400 gap-8 ">
          {phone && (
            <div className={cn("text-md flex gap-1 ", phoneClassName)}>
              <Phone className={cn("h-4 aspect-square", iconClassName)} />
              <p className="truncate w-[125px]">{phone}</p>
            </div>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className={cn(
                "text-md flex gap-1 hover:text-gray-500 hover:underline transition-all",
                emailClassName
              )}
            >
              <Mail className={cn("h-4 aspect-square", iconClassName)} />
              <p className="truncate w-[125px]">{email}</p>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default AvatarCard;
