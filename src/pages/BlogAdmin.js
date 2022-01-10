import React from "react";
import { Route, Routes, useLocation } from "react-router";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import NewPosts from "../components/NewPosts";

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
      <PageTitle text="Blog Admin" />
      <AdminPanelStyles>
        <div className="Navigation-button">{button}</div>
      </AdminPanelStyles>
      <Routes>
        <Route path="/new" element={<NewPosts />} />
      </Routes>
    </>
  );
}
