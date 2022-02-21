import { FC } from "react";
import { Button as BSButton } from "react-bootstrap";
import ButtonType from "./Button.type";
import "./styles.css";

const Button: FC<ButtonType> = ({
  shape,
  variant,
  size = "sm",
  children,
  ...props
}) => {
  return (
    <BSButton className={`${shape}`} variant={variant} size={size}>
      {children}
    </BSButton>
  );
};

export default Button;
