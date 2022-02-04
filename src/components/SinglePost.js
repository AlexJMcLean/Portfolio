import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import "draft-js/dist/Draft.css";

import CircularLoader from "./CircularLoader";
import PageTitle from "./PageTitle";

import { getPost } from "../actions/posts";

const SinglePostStyles = styled.article`
  color: var(--white);

  img {
    width: 100%;
    padding-bottom: 40px;
  }

  h1 {
  }
`;

export default function SinglePost() {
  let post = useSelector((state) => state.posts?.post);
  let { isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    dispatch(getPost(slug));
  }, [slug, dispatch]);

  useEffect(() => {
    if (post) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(post.body)))
      );
    }
  }, [post]);

  return (
    <>
      {!isLoading ? (
        <SinglePostStyles>
          <img src={post.image} alt={post.imageAlt || post.title} />
          <PageTitle text={post.title} />
          <Editor readOnly={true} editorState={editorState} />
        </SinglePostStyles>
      ) : (
        <CircularLoader />
      )}
    </>
  );
}
