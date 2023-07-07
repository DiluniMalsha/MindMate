import React from "react";
import styled from "styled-components";

const InputComponent = styled.input`
  @font-face {
    font-family: "Lato-light";
    src: local("Lato-light"),
    url("../../assets/font/Lato-Light.ttf") format("truetype");
  }
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  text-decoration: none;
  vertical-align: middle;
  cursor: text;
  user-select: none;
  font-size: ${(props) => props.fontSize}px;
  border-radius: ${(props) => props.borderRadius}px;
  width: ${(props) => props.width};
  padding: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  placeholder: ${(props) => props.placeholder};
  font-family: "Lato-light" !important; ;
  font-weight: 500;
  border: 1px solid #d8d8d8;
  background-color: ${(props) =>
          props.variant === "light"
                  ? "#ffffff"
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
  color: ${(props) =>
          props.variant === "light"
                  ? "#000000"
                  : props.variant === "dark"
                          ? "#000000"
                          : props.variant === "primary"
                                  ? "#000000"
                                  : props.variant === "secondary"
                                          ? "#000000"
                                          : props.variant === "success"
                                                  ? "#000000"
                                                  : props.variant === "info"
                                                          ? "#000000"
                                                          : props.variant === "warning"
                                                                  ? "#000000"
                                                                  : props.variant === "danger"
                                                                          ? "#000000"
                                                                          : "#000000"};

  &:active {
    border-color: #d8d8d8;
    outline: 0;
  }

  &:focus {
    border-color: #d8d8d8;
    box-shadow: none;
    outline: 0;
  }
`;

const CustomInput = ({
                         type,
                         variant,
                         className,
                         id,
                         children,
                         width,
                         radius,
                         size,
                         fontSize,
                         label,
                         placeholder,
                     }) => {
    return (
        <InputComponent
            type={
                type
                    ? type
                    : "button, checkbox, color, date, datetime-local, email, file, hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week"
            }
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
            placeholder={placeholder}
            label={label}
        >
            {children}
        </InputComponent>
    );
};

export default CustomInput;
