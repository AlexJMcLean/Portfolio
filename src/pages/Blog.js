import React from "react";
import { useSelector } from "react-redux";

import PageTitle from "../components/PageTitle";
import Post from "../components/Post";

export default function Blog(props) {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div>
      <PageTitle text="Blog" />

      <Post />
    </div>
  );
}
