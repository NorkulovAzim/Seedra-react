import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} searchTerm={searchTerm} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
