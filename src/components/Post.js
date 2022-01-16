import React from "react";
import styled from "styled-components";

const PostCardStyle = styled.a``;

export default function Posts({ post }) {
  return (
    <PostCardStyle>
      <img src={post.image} alt={post.imageAlt || post.title} />
      <div>
        <p className="created-date">{post.createdAt}</p>
        <h2>{post.title}</h2>
        <p>{post.snippet}</p>
      </div>
    </PostCardStyle>
  );
}
