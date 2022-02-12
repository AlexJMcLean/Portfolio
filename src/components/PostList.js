import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import CircularLoader from "../components/CircularLoader";
import ListItem from "./ListItem";

const ListContainerStyles = styled.section``;

export default function PostList({ posts, isLoading, setCurrentId, userRole }) {
  console.log(posts);
  return (
    <>
      {isLoading ? (
        <CircularLoader />
      ) : (
        <ListContainerStyles>
          {posts.map((post) => (
            <ListItem
              key={post._id}
              post={post}
              setCurrentId={setCurrentId}
              userRole={userRole}
            />
          ))}
        </ListContainerStyles>
      )}
    </>
  );
}
