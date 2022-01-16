import React from "react";
import styled from "styled-components";

const PostCardStyle = styled.a`
  background-color: var(--darkNavy);
  img {
    max-width: 100%;
    border-bottom: solid 5px var(--green);
  }
  .text-container {
    padding: 20px;
  }
  h2 {
    font-size: 1.5em;
    text-align: center;
  }

  &:hover {
    h2 {
      color: var(--green);
      scale: 1.1;
      transition: 0.3s;
    }
    cursor: pointer;
  }

`;

export default function Posts({ post }) {
  return (
    <PostCardStyle>
      <img src={post.image} alt={post.imageAlt || post.title} />
      <div className="text-container">
        <h2>{post.title}</h2>
        <p>{post.snippet}</p>
      </div>
    </PostCardStyle>
  );
}
