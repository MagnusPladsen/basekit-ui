import { AvatarFallback } from "@radix-ui/react-avatar";
import AvatarWrapper from "./components/AvatarWrapper.component";
import AvatarImage from "./components/AvatarImage.component";

export function Avatar({
  initials,
  src,
  alt,
}: {
  initials: string;
  src: string;
  alt: string;
}) {
  return (
    <AvatarWrapper>
      <AvatarImage
        src={src ?? "https://github.com/shadcn.png"}
        alt={alt ?? "@shadcn"}
      />
      <AvatarFallback>{initials}</AvatarFallback>
    </AvatarWrapper>
  );
}
