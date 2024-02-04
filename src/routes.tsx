import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import List from "./Pages/List";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list/:id" element={<List />} />
    </Routes>
  );
};

export default Rotas;
