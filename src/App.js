import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Layout>
  );
}

export default App;
