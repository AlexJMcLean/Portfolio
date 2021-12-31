import "./App.css";
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
        <Route element="/" component={Main} />
        <Route element="/blog" component={Blog} />
        <Route element="/about" component={About} />
        <Route element="/portfolio" component={Portfolio} />
        <Route element="/contact" component={Contact} />
      </Routes>
    </Layout>
  );
}

export default App;
