import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  transitions,
  positions,
  Provider as AlertContainer,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import NewPosts from "../components/NewPosts";
import PostList from "../components/PostList";

const AdminPanelStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default function BlogAdmin() {
  const posts = useSelector((state) => state.posts);
  const path = useLocation().pathname;
  const [currentId, setCurrentId] = useState(null);
  let button;
  if (path === "/admin") {
    button = <Button path="/admin/edit" text="Create new post" />;
  } else if (path === "/admin/edit") {
    button = <Button path="/admin" text="Back to posts" />;
  }
  let timeout = 5000;

  return (
    <>
      <AlertContainer
        template={AlertTemplate}
        position={positions.MIDDLE}
        transition={transitions.FADE}
        timeout={timeout}
      >
        <PageTitle text="Blog Admin" />
        <AdminPanelStyles>
          <div className="Navigation-button">{button}</div>
        </AdminPanelStyles>
        <Routes>
          <Route
            path="/edit"
            element={
              <NewPosts currentId={currentId} setCurrentId={setCurrentId} />
            }
          />
          <Route
            path="/"
            element={
              <PostList
                posts={posts}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            }
          />
        </Routes>
      </AlertContainer>
    </>
  );
}
