import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";

const ListItemStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr 2fr;
  gap: 2rem;
  padding: 1.5rem;
  color: var(--slate);
  border: var(--borderStyle);
`;

const ButtonSyles = styled.button`
  background-color: rgba(0, 0, 0, 0);
  font-family: var(--mono-font);
  border: var(--borderStyle);
  border-radius: var(--borderRadius);
  padding: 20px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: var(--navy);
    background-color: var(--green);
  }
`;

export default function ListItem({ post, setCurrentId }) {
  const handleClick = () => setCurrentId(post._id);
  return (
    <ListItemStyles>
      <div>{post.title}</div>
      <div>{post.snippet}</div>
      <div>{post._id}</div>
      <div>
        <Button path="/admin/edit" text="Edit" click={handleClick} />

        <Button path="/admin/new" text="Delete" style="danger" />
      </div>
    </ListItemStyles>
  );
}
