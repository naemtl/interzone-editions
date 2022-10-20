import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Homepage from "./pages/Homepage/Homepage";
import Releases from "./pages/Releases/Releases";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
