import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import PageTitle from "../components/PageTitle";
import Post from "../components/PostCard";
import CircularLoader from "../components/CircularLoader";

const GridContainerStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export default function Blog(props) {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <PageTitle text="Blog" />
      {!posts.length ? (
        <CircularLoader />
      ) : (
        // console.log(posts)
        <GridContainerStyles>
          {posts.map((post) => (
            <Post key={posts._id} post={post} />
          ))}
        </GridContainerStyles>
      )}
    </div>
  );
}
