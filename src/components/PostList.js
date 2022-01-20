import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CircularLoader from "../components/CircularLoader";
import ListItem from "./ListItem";

const ListContainerStyles = styled.section``;

export default function PostList({ posts, setCurrentId }) {
  return (
    <>
      {!posts.length ? (
        <CircularLoader />
      ) : (
        <ListContainerStyles>
          {posts.map((post) => (
            <ListItem key={post._id} post={post} setCurrentId={setCurrentId} />
          ))}
        </ListContainerStyles>
      )}
    </>
  );
}
