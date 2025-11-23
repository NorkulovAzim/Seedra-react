import React, { useState } from "react";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Comments from "./components/Comments";

import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Layout onSearch={handleSearch}>
      <Hero />
      <Products searchTerm={searchTerm} />
      <Blog />
      <Comments />
    </Layout>
  );
};

export default App;
