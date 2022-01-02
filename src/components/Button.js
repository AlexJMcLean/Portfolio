import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonSyles = styled.button`
  background-color: rgba(0,0,0,0);
  border: solid 1px var(--green);
  padding: 20px;
  cursor: pointer;
`;

export default function Button({path, text, icon}) {
  return (
    <Link to={path}>
      <ButtonSyles className="font-mono">
        {text}
        {icon != null &&
            <span className="material-icons">{icon}</span>
        }
      </ButtonSyles>
    </Link>
  )
}