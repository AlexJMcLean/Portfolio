import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonSyles = styled.button`
  background-color: rgba(0, 0, 0, 0);
  font-family: var(--mono-font);
  border: var(--borderStyle);
  border-radius: var(--borderRadius);
  padding: 20px;
  cursor: pointer;
  transition: all 0.5s;
  &.danger {
    background-color: var(--danger);
  }
  &:hover {
    color: var(--navy);
    background-color: var(--green);
  }
`;

export default function Button({ path, text, icon, click, style }) {
  return (
    <Link to={path}>
      <ButtonSyles
        className={"font-mono" + (style ? " " + style : "")}
        onClick={click}
      >
        {text}
        {icon != null && <span className="material-icons">{icon}</span>}
      </ButtonSyles>
    </Link>
  );
}
