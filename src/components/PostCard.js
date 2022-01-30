import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const PostCardStyle = styled.div`
  background-color: var(--darkNavy);
  border-radius: 10px;
  overflow: hidden;
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
    transform: rotate(1deg);
    h2 {
      color: var(--green);
      scale: 1.1;
      transition: 0.3s;
    }
    cursor: pointer;
  }
`;

export default function Posts({ post }) {
  const navigate = useNavigate();
  const openPost = () => navigate(`/blog/${post.slug}`);
  return (
    <PostCardStyle onClick={openPost}>
      <img src={post.image} alt={post.imageAlt || post.title} />
      <div className="text-container">
        <h2>{post.title}</h2>
        <p>{post.snippet}</p>
      </div>
    </PostCardStyle>
  );
}
