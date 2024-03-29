const ButtonWrapper = ({
  href,
  children,
}: {
  href?: string;
  children: JSX.Element;
}) => {
  if (href) {
    return (
      <a href={href} target="_blank">
        {children}
      </a>
    );
  }
  return (
    <div
      style={{
        margin: "8px",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;
