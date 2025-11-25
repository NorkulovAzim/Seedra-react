import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Comments from "./components/Comments";
import Description from "./components/Description";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    AOS.refresh();
  });

  return (
    <Layout onSearch={handleSearch}>
      <Hero />
      <Products searchTerm={searchTerm} />
      <Blog />
      <Comments />
      <Description />
    </Layout>
  );
};

export default App;
