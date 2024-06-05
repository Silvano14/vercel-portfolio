import React from "react";

type TextProps = {
  className: string;
  children: React.JSX.Element;
};

const Text: React.FC<TextProps> = ({ className, children }) => {
  return <p className={`font-Inconsolata ${className}`}>{children}</p>;
};

export default Text;
