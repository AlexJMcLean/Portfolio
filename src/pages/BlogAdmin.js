import React from "react";
import { Route, Routes, useLocation } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import NewPosts from "../components/NewPosts";
import PostList from "../components/PostList";

const AdminPanelStyles = styled.div``;

export default function BlogAdmin() {
  const posts = useSelector((state) => state.posts);
  const path = useLocation().pathname;
  let button;
  if (path === "/admin") {
    button = <Button path="/admin/new" text="Create new post" />;
  } else if (path === "/admin/new") {
    button = <Button path="/admin" text="Back to posts" />;
  }

  return (
    <>
      <AlertProvider
        template={AlertTemplate}
        position={positions.MIDDLE}
        transition={transitions.FADE}
        timeout="5000"
      >
        <PageTitle text="Blog Admin" />
        <AdminPanelStyles>
          <div className="Navigation-button">{button}</div>
        </AdminPanelStyles>
        <Routes>
          <Route path="/new" element={<NewPosts />} />
          <Route path="/" element={<PostList />} />
        </Routes>
      </AlertProvider>
    </>
  );
}
