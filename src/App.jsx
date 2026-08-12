// App.jsx

import { Link, Route, Routes, useLocation } from "react-router";
import { lazy, Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadDetails from "./pages/Contents/ReadDetails";

import Summary from "./pages/Sidebars/Summary";
import Quotations from "./pages/Sidebars/Quotations";
import Theme from "./pages/Sidebars/Theme";
import Video from "./pages/Sidebars/Video";

import Developer from "./components/Developer";
import Loading from "./components/Loading";
import NotFound from "./components/NoPage";

import { ChevronRight, Home as HomeIcon } from "lucide-react";

// =========================================================
// Lazy-loaded pages
// =========================================================

const Home = lazy(() => import("./pages/Home"));
const Content = lazy(() => import("./pages/Content"));
const Read = lazy(() => import("./pages/Contents/Read"));
const BookMark = lazy(() => import("./pages/Contents/BookMark"));
const Notes = lazy(() => import("./pages/Contents/Notes"));

// =========================================================
// App
// =========================================================

const App = () => {
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Remove the chapter ID from:
  // /content/read/:id
  const filtered = pathSegments.filter(
    (segment, index) =>
      !(
        index === pathSegments.length - 1 && pathSegments[index - 1] === "read"
      ),
  );

  return (
    <main className="min-h-screen flex flex-col">
      {/* =================================================
          Header
      ================================================= */}

      <Header />

      {/* =================================================
          Main Application Area
      ================================================= */}

      <div className="flex-1 w-full">
        <div className="page-container">
          {/* =============================================
              Breadcrumbs
          ============================================= */}

          <nav aria-label="Breadcrumb" className="mb-6">
            <div className="inline-flex items-center gap-1 px-3 py-2 rounded-2xl border border-neutral-200 text-sm">
              {/* Home */}

              <Link
                to="/"
                className="flex items-center gap-1.5 px-2 py-1 rounded-xl text-neutral-500 hover:text-[var(--TextColor)] transition-all"
              >
                <HomeIcon size={15} />

                <span>Home</span>
              </Link>

              {/* Breadcrumb segments */}

              {filtered.map((segment, index) => {
                const to = "/" + filtered.slice(0, index + 1).join("/");

                const label = segment
                  .replace(/-/g, " ")
                  .replace(/\b\w/g, (letter) => letter.toUpperCase());

                const isLast = index === filtered.length - 1;

                return (
                  <div
                    key={`${segment}-${index}`}
                    className="flex items-center gap-1"
                  >
                    <ChevronRight size={14} className="text-neutral-300" />

                    <Link
                      to={to}
                      className={`px-2 py-1 rounded-xl transition-all ${
                        isLast
                          ? "text-[var(--TextColor)] font-semibold"
                          : "text-neutral-500 hover:text-[var(--TextColor)]"
                      }`}
                    >
                      {label}
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>

          {/* =============================================
              Routed Content
          ============================================= */}

          <section className="clay p-4 sm:p-6 md:p-8 min-h-[500px] page-enter">
            <Suspense
              fallback={
                <div className="min-h-[400px] flex items-center justify-center">
                  <Loading />
                </div>
              }
            >
              <Routes>
                {/* =================================
                    Main Pages
                ================================= */}

                <Route path="/" element={<Home />} />

                <Route path="/content" element={<Content />} />

                {/* =================================
                    Sidebar Pages
                ================================= */}

                <Route path="/summary" element={<Summary />} />

                <Route path="/quotations" element={<Quotations />} />

                <Route path="/theme" element={<Theme />} />

                <Route path="/video" element={<Video />} />

                <Route path="/developer" element={<Developer />} />

                {/* =================================
                    Reading
                ================================= */}

                <Route path="/content/read" element={<Read />} />

                <Route path="/content/read/:id" element={<ReadDetails />} />

                {/* =================================
                    User Content
                ================================= */}

                <Route path="/content/book-mark" element={<BookMark />} />

                <Route path="/content/notes" element={<Notes />} />

                {/* =================================
                    404
                ================================= */}

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </section>
        </div>
      </div>

      {/* =================================================
          Footer
      ================================================= */}

      <Footer />
    </main>
  );
};

export default App;
