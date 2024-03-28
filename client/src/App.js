import * as React from "react";
import Register from './pages/Register.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
