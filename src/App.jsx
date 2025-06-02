import { Link, Route, Routes, useLocation } from "react-router";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadDetails from "./pages/Contents/ReadDetails";
import Summary from "./pages/Sidebars/Summary";
import Quotations from "./pages/Sidebars/Quotations";
import Theme from "./pages/Sidebars/Theme";
import Loading from "./components/Loading";
import BookMarkContainer from "./pages/Contents/BookMark";
import Video from "./pages/Sidebars/Video";
import Developer from "./components/Developer";
import NotFound from "./components/NoPage";

// Lazy-load pages
const Home = lazy(() => import("./pages/Home"));
const Content = lazy(() => import("./pages/Content"));
const Read = lazy(() => import("./pages/Contents/Read"));
const BookMark = lazy(() => import("./pages/Contents/BookMark"));
const Notes = lazy(() => import("./pages/Contents/Notes"));

/* ────────────────────────────────────────────────────────── */

const App = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // strip the trailing ID after “…/read/123”
  const filtered = pathSegments.filter(
    (seg, idx) => !(idx === pathSegments.length - 1 && pathSegments[idx - 1] === "read")
  );

  return (
    <main>
      <Header />

      {/* ── Breadcrumbs & routed pages ─────────────────────── */}
      <section className="max-w-2xl mx-auto p-5 flex-grow space-y-4">
        {/* ── Breadcrumb trail ─────────────────────────────── */}
        <div className="text-sm transition-all">

          <Link to="/" className="hover:opacity-70">
            Home
          </Link>

          {filtered.map((segment, i) => {
            const to = "/" + filtered.slice(0, i + 1).join("/");
            const label = segment
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase());

            const isLast = i === filtered.length - 1;

            return (
              <span key={i}>
                {" / "}
                <Link
                  to={to}
                  className={isLast ? "pointer-events-none text-[var(--TextColor)]" : "hover:opacity-70"}
                >
                  {label}
                </Link>
              </span>
            );
          })}
        </div>

        {/* ── Routed pages ─────────────────────────────────── */}
        <Suspense fallback={<Loading />}>
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/summary" element={<Summary />} />
            <Route exact path="/quotations" element={<Quotations />} />
            <Route exact path="/theme" element={<Theme />} />
            <Route exact path="/video" element={<Video />} />
            <Route exact path="/developer" element={<Developer />} />

            <Route exact path="/content" element={<Content />} />
            <Route exact path="/content/read" element={<Read />} />
            <Route exact path="/content/read/:id" element={<ReadDetails />} />
            <Route exact path="/content/book-mark" element={<BookMarkContainer />} />
            <Route exact path="/content/notes" element={<Notes />} />

            {/* 404 */}
            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Suspense>
      </section>

      <Footer />
    </main>
  );
};

export default App;
