import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/posts";

import Button from "./Button";

const ListItemStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr 2fr;
  gap: 2rem;
  padding: 1.5rem;
  color: var(--slate);
  border: var(--borderStyle);
`;

export default function ListItem({ post, setCurrentId, userRole }) {
  const dispatch = useDispatch();
  const handleClick = () => setCurrentId(post._id);
  const handleClickDelete = () => dispatch(deletePost(post._id));
  let isDisabled = userRole === "demo" && true;

  return (
    <ListItemStyles>
      <div>{post.title}</div>
      <div>{post.snippet}</div>
      <div>{post._id}</div>
      <div>
        <Button path="/admin/edit" text="Edit" click={handleClick} />

        <Button
          path="/admin"
          text="Delete"
          style="danger"
          click={handleClickDelete}
          disabled={isDisabled}
        />
      </div>
    </ListItemStyles>
  );
}
