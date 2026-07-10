import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Blog from "./pages/Blog";
import Experience from "./pages/Experience";
import ResearchDetail from "./pages/ResearchDetail";

function NotFound() {
  return (
    <section className="min-h-[60vh] border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-24">
        <div className="text-small uppercase tracking-wider text-muted-foreground mb-6">404</div>
        <h1 className="text-foreground mb-6">Page not found.</h1>
        <p className="text-body text-muted-foreground mb-10 max-w-2xl">
          The address may be outdated, or the page may have moved.
        </p>
        <Link
          to="/"
          className="inline-flex bg-[#1a1a1b] text-white px-8 py-4 text-body uppercase hover:bg-gray-800 transition-colors"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research/:slug" element={<ResearchDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
