import { Button } from "@nextui-org/react";
import React from "react";

type DefaultIconButtonProps = {
  onClick?: () => void;
  children: React.JSX.Element | React.JSX.Element[];
  size?: "lg" | "sm" | "md";
};

const DefaultIconButton: React.FC<DefaultIconButtonProps> = ({
  onClick,
  children,
  size,
}) => {
  return (
    <Button onClick={onClick} isIconOnly variant="light" size={size}>
      {children}
    </Button>
  );
};

export default DefaultIconButton;
