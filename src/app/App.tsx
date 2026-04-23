import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";
import ResearchDetail from "./pages/ResearchDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Home />} />
          <Route path="/research/:slug" element={<ResearchDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
