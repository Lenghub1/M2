import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import NewFeed from "./component/NewFeed";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newfeed" element={<NewFeed />} />
      </Routes>
    </Router>
  );
};

export default App;
