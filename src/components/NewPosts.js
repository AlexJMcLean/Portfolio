import React, { useState } from "react";
import styled from "styled-components";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

import { createPost } from "../actions/posts";

const NewPostFormStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-rows: 1fr 2fr 5fr 1fr;

  input,
  textarea,
  button {
    background-color: var(--darkNavy);
    color: var(--slate);
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
    color: var(--slate);
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
  }
  .input-container {
    margin-bottom: 2rem;
  }
  .title {
    margin-top: 2rem;
  }
`;

export default function NewPosts(posts) {
  const dispatch = useDispatch();
  const alert = useAlert();
  let navigate = useNavigate();
  const [status, setStatus] = useState("Submit");
  const [formState, setFormState] = useState({
    title: "",
    image: "",
    imageAlt: "",
    snippet: "",
    body: "",
    date: "",
  });

  const handleStateChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState((prevState) => ({
      ...prevState,
      date: new Date().toLocaleDateString("en-GB"),
    }));
    setStatus("Submiting...");
    try {
      await dispatch(createPost(formState));
      setStatus("Success!");
      setFormState({
        title: "",
        image: "",
        imageAlt: "",
        snippet: "",
        body: "",
        date: "",
      });
      navigate("/admin");
      alert.success("Post uploaded successfully");
    } catch (error) {
      setStatus("Error");
      alert.error("Error! Check console for more information");
    }
  };

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
            <label htmlFor="body">Body</label>
            <textarea
              type="text"
              id="body"
              name="body"
              rows="30"
              onChange={handleStateChange}
              value={formState.body}
              required
            ></textarea>
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
          <button type="submit">{status}</button>
        </div>
      </form>
    </NewPostFormStyles>
  );
}
