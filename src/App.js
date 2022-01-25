import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogAdmin from "./pages/BlogAdmin";
import Auth from "./pages/Auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin/*" element={<BlogAdmin />} />
        <Route path="auth" element={<Auth />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Layout>
  );
}

export default App;
