import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked" element={<Liked />} />
      
    </Routes>
  );
}