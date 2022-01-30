import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import slugify from "react-slugify";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { createPost, updatePost } from "../actions/posts";

const NewPostFormStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-rows: 1fr 2fr 5fr 1fr;
  form {
    background-color: var(--pureWhite);
    padding: 30px 50px;
    h2 {
      color: var(--darkNavy);
    }
  }

  input,
  textarea,
  button,
  .editorClassName {
    background-color: var(--white);
    color: var(--darkNavy);
    border: var(--borderStyle);
    border-radius: var(--borderRadius);
    padding: 15px;
    outline: none;
    box-sizing: border-box;
    transition: all 0.5s;

    &:focus {
      border-color: blue;
    }
  }
  input,
  textarea {
    width: 100%;
  }
  label {
    display: block;
    color: var(--darkNavy);
    margin-bottom: 1rem;
  }
  textarea {
    height: 100%;
  }
  button {
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: var(--navy);
      background-color: var(--green);
    }
    &:disabled {
      background-color: var(--slate);
      color: var(--navy);
      cursor: auto;
    }
  }
  .input-container {
    margin-bottom: 2rem;
  }
  .title {
    margin-top: 2rem;
  }
`;

export default function NewPosts({ posts, currentId, setCurrentId, userRole }) {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  let isDisabled = userRole === "demo" && true;

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [status, setStatus] = useState("Submit");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const [formState, setFormState] = useState({
    title: "",
    slug: "",
    image: "",
    imageAlt: "",
    snippet: "",
    body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    date: new Date().toLocaleDateString("en-GB"),
  });

  const handleStateChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      slug: `${slugify(formState.title)}`,
      body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submiting...");
    try {
      if (currentId) {
        await dispatch(updatePost(currentId, formState));
        alert.success("Post updated successfully");
      } else {
        await dispatch(createPost(formState));
        alert.success("Post uploaded successfully");
      }
      setStatus("Success!");
      setEditorState(EditorState.createEmpty());
      setFormState({
        title: "",
        slug: "",
        image: "",
        imageAlt: "",
        snippet: "",
        body: editorState,
        date: new Date().toLocaleDateString("en-GB"),
      });
      navigate("/admin");
    } catch (error) {
      setStatus("Error");
      alert.error("Error! Check console for more information");
    }
  };

  useEffect(() => {
    if (post) {
      setFormState(post);
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(post.body)))
      );
    }
  }, [post]);

  return (
    <NewPostFormStyles>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2 className="title">
          {formState.title === "" ? "New Post" : formState.title}
        </h2>
        <div>
          <div className="input-container">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={handleStateChange}
              value={formState.title}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="snippet">Snippet</label>
            <textarea
              type="text"
              id="snippet"
              rows="5"
              name="snippet"
              onChange={handleStateChange}
              value={formState.snippet}
              required
            ></textarea>
          </div>
          <div className="input-container">
            {/* <label htmlFor="body">Body</label>
            <textarea
              type="text"
              id="body"
              name="body"
              rows="30"
              onChange={handleStateChange}
              value={formState.body}
              required
            ></textarea> */}
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={setEditorState}
            />
          </div>
          <div className="input-container">
            <label htmlFor="File">Choose your image</label>
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setFormState((prevState) => ({ ...prevState, image: base64 }))
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="imageAlt">Image Alt</label>
            <input
              type="text"
              id="imageAlt"
              name="imageAlt"
              onChange={handleStateChange}
              value={formState.imageAlt}
              required
            />
          </div>
          <button type="submit" disabled={isDisabled}>
            {status}
          </button>
        </div>
      </form>
    </NewPostFormStyles>
  );
}
