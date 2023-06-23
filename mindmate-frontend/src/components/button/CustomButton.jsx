import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  font-size: ${(props) => props.fontSize}px;
  border-radius: ${(props) => props.borderRadius}px;
  width: ${(props) => props.width}px;
  padding: ${(props) =>
    props.size === "sm"
      ? "1.5rem"
      : props.size === "md"
      ? "1.8rem"
      : props.size === "lg"
      ? "2.0rem"
      : "1.5rem"};
  height: ${(props) =>
    props.size === "sm"
      ? "34px"
      : props.size === "md"
      ? "37px"
      : props.size === "lg"
      ? "40px"
      : "30px"};
  font-family: "Inner", "Lato";
  font-weight: 500;
  border: 1px solid transparent;
  background-color: ${(props) =>
    props.variant === "light"
      ? "#f8f9fa"
      : props.variant === "dark"
      ? "#212529"
      : props.variant === "primary"
      ? "#171742"
      : props.variant === "secondary"
      ? "#6c757d"
      : props.variant === "success"
      ? "#198754"
      : props.variant === "info"
      ? "#0dcaf0"
      : props.variant === "warning"
      ? "#ffc107"
      : props.variant === "danger"
      ? "#dc3545"
      : "#f8f9fa"};
  color: ${(props) =>
    props.variant === "light"
      ? "#000000"
      : props.variant === "dark"
      ? "#ffffff"
      : props.variant === "primary"
      ? "#ffffff"
      : props.variant === "secondary"
      ? "#ffffff"
      : props.variant === "success"
      ? "#ffffff"
      : props.variant === "info"
      ? "#ffffff"
      : props.variant === "warning"
      ? "#ffffff"
      : props.variant === "danger"
      ? "#ffffff"
      : "#ffffff"};
`;
const CustomButton = ({
  type,
  variant,
  className,
  id,
  onclick,
  children,
  width,
  radius,
  size,
  fontSize,
}) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      className={
        className ? `button-components ${className}` : "btn-components"
      }
      id={id}
      onClick={onclick}
      width={width}
      borderRadius={radius}
      size={size}
      fontSize={fontSize}
    >
      {children}
    </ButtonComponent>
  );
};

export default CustomButton;
