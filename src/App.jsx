import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DOWNLOAD_EBOOK, LANDING_EBOOKS } from "./constants/routes";
import LandingEBooks from "./pages/LandingEBooks/LandingEBooks";
import DownloadEBook from "./pages/DownloadEBook/DownloadEBook";
function App() {
  return (
    <Routes>
      <Route path={LANDING_EBOOKS} element={<LandingEBooks />} />
      <Route path={DOWNLOAD_EBOOK} element={<DownloadEBook />} />
    </Routes>
  );
}

export default App;
