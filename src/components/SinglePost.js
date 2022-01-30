import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

import { getPost } from "../actions/posts";

export default function SinglePost() {
  const { post } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getPost(slug));
  }, [slug]);

  return (
    <>
      <h1>Blog Post</h1>
      <p>some text</p>
    </>
  );
}
