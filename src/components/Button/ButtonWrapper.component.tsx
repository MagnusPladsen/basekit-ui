const ButtonWrapper = ({
  href,
  children,
}: {
  href?: string;
  children: JSX.Element;
}) => {
  if (href) {
    return <a href={href} target="_blank">{children}</a>;
  }
  return <>{children}</>;
};

export default ButtonWrapper;
