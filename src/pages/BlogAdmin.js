import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
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
import { getPosts } from "../actions/posts";

const AdminPanelStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
// { posts, isLoading }
export default function BlogAdmin() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  console.log(posts);
  const userRole = JSON.parse(localStorage.getItem("profile")).result.role;

  const path = useLocation().pathname;
  const [currentId, setCurrentId] = useState(null);
  let button;

  if (path === "/admin") {
    button = <Button path="/admin/edit" text="Create new post" />;
  } else if (path === "/admin/edit") {
    button = <Button path="/admin" text="Back to posts" />;
  }
  let alertTimeout = 5000;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <AlertContainer
        template={AlertTemplate}
        position={positions.MIDDLE}
        transition={transitions.FADE}
        timeout={alertTimeout}
      >
        <PageTitle text="Blog Admin" />
        <AdminPanelStyles>
          <div className="Navigation-button">{button}</div>
        </AdminPanelStyles>
        <Routes>
          <Route
            path="/edit"
            element={
              <NewPosts
                currentId={currentId}
                setCurrentId={setCurrentId}
                userRole={userRole}
              />
            }
          />
          <Route
            path="/"
            element={
              <PostList
                posts={posts}
                isLoading={isLoading}
                currentId={currentId}
                setCurrentId={setCurrentId}
                userRole={userRole}
              />
            }
          />
        </Routes>
      </AlertContainer>
    </>
  );
}
