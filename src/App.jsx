import { BrowserRouter, Routes, Route } from "react-router-dom";

import Releases from "./pages/Releases/Releases";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Releases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
