import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Personajes from "./pages/personajes";
import Personaje from "./pages/personaje";
import NotFound from "./pages/404";
/* import anadir from './pages/añadir'; */
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="personajes" element={<Personajes />} />
          <Route path="personajes/:id" element={<Personaje />} />
          {/* <Route path="anadir" element={<anadir />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
