import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/posts";

import Button from "./Button";

const ListItemStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  gap: 2rem;
  padding: 1.5rem;
  color: var(--slate);
  border: var(--borderStyle);

  .button-container {
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
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
      <div className="button-container">
        <Button path="/admin/edit" text="Edit" click={handleClick} />

        <Button
          path="/admin"
          text="Delete"
          warnings="danger"
          click={handleClickDelete}
          disabled={isDisabled}
        />
      </div>
    </ListItemStyles>
  );
}
