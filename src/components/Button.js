import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonSyles = styled.button`
  background-color: ${(props) =>
    !props.disabled ? "rgba(0, 0, 0, 0)" : "var(--slate)"};
  font-family: var(--mono-font);
  border: var(--borderStyle);
  border-radius: var(--borderRadius);
  padding: 20px;
  cursor: pointer;
  transition: all 0.5s;
  &.danger {
    background-color: ${(props) =>
      !props.disabled ? "var(--danger)" : "var(--slate)"};
  }
  &:hover {
    color: ${(props) => (!props.disabled ? "var(--navy)" : "")};
    background-color: ${(props) => (!props.disabled ? "var(--green)" : "")};
  }
`;

export default function Button({
  path,
  text,
  icon,
  click,
  warnings,
  disabled,
}) {
  return (
    <Link to={path}>
      <ButtonSyles
        className={"font-mono" + (warnings ? " " + warnings : "")}
        onClick={click}
        disabled={disabled}
      >
        {text}
        {icon != null && <span className="material-icons">{icon}</span>}
      </ButtonSyles>
    </Link>
  );
}
