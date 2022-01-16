import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import PageTitle from "../components/PageTitle";
import Post from "../components/Post";
import CircularLoader from "../components/CircularLoader";

export default function Blog(props) {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <PageTitle text="Blog" />

      {!posts.length ? (
        <CircularLoader />
      ) : (
        // console.log(posts)
        posts.map((post) => <Post key={posts.id} post={post} />)
      )}
    </div>
  );
}
