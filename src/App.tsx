import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Detail from "@/pages/Detail";

const isProd = import.meta.env.PROD;

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}