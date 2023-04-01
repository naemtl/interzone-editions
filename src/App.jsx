import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Homepage from "./pages/Homepage/Homepage";
import Releases from "./pages/Releases/Releases";
import Events from "./pages/Events/Events";
import RadioShows from "./pages/RadioShows/RadioShows";


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
        <Route
          path="/events"
          element={<Events />}
        />
        <Route
          path="/radio-shows"
          element={<RadioShows />}
        />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
