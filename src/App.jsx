import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingEBooks from "./pages/LandingEBooks/LandingEBooks";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingEBooks />} />
    </Routes>
  );
}

export default App;
