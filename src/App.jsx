import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Releases from "./pages/Releases/Releases";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/releases"
          element={<Releases />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
