import React from "react";

type DefaultTextProps = {
  className?: string;
  children: React.JSX.Element | string;
};

export const DefaultText: React.FC<DefaultTextProps> = ({
  className,
  children,
}) => {
  return <p className={`font-Inconsolata ${className}`}>{children}</p>;
};
