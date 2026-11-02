// pages/Contents/Notes.jsx

import React, { useEffect, useState } from "react";
import {
  NotebookPen,
  Trash2,
  Plus,
  StickyNote,
  Sparkles,
  X,
} from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [message, setMessage] = useState(false);

  // =========================================================
  // FETCH NOTES
  // =========================================================

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/notes`)
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load notes");
        setLoading(false);
      });
  }, []);

  // =========================================================
  // ADD NOTE
  // =========================================================

  const addNote = () => {
    const trimmed = input.trim();

    if (!trimmed) return;

    axios
      .post(`${import.meta.env.VITE_API_URL}/notes`, {
        title: trimmed,
        content: trimmed,
      })
      .then((res) => {
        setNotes((previous) => [...previous, res.data]);

        setInput("");

        showMessage("Note added");
      })
      .catch(() => {
        setError("Failed to add note");
      });
  };

  // =========================================================
  // DELETE NOTE
  // =========================================================

  const deleteNote = (id) => {
    // Optimistic UI update
    setNotes((previous) => previous.filter((note) => note.id !== id));

    axios.delete(`${import.meta.env.VITE_API_URL}/notes/${id}`).catch(() => {
      setError("Failed to delete note");
    });
  };

  // =========================================================
  // TOAST
  // =========================================================

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage(false);
    }, 2500);
  };

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <div className="space-y-5 py-6">
        <div className="h-32 rounded-[30px] bg-neutral-100 animate-pulse" />

        <div className="h-16 rounded-[22px] bg-neutral-100 animate-pulse" />

        <div className="h-24 rounded-[22px] bg-neutral-100 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="space-y-7 pb-10">
      {/* =================================================
          TOAST
      ================================================= */}

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ y: -30, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -30, opacity: 0, scale: 0.95 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-white shadow-[8px_8px_25px_rgba(180,190,205,0.35)] text-sm font-medium text-neutral-700"
          >
            <Sparkles size={16} className="text-[var(--TextColor)]" />

            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="relative overflow-hidden rounded-[30px] bg-[var(--TextColor)] text-white p-6 md:p-8 shadow-[8px_8px_25px_rgba(0,143,226,0.2)]">
        {/* Decorative circles */}

        <div className="absolute -right-16 -top-20 w-56 h-56 rounded-full bg-white opacity-[0.07]" />

        <div className="absolute -left-20 -bottom-24 w-52 h-52 rounded-full bg-white opacity-[0.05]" />

        <div className="relative">
          <div className="flex items-center gap-2 text-white/70 text-xs uppercase tracking-[0.18em] font-semibold">
            <NotebookPen size={15} />
            Personal Space
          </div>

          <div className="flex items-end justify-between gap-4 mt-3">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                My Notes
              </h1>

              <p className="text-white/70 text-sm mt-2 max-w-md">
                Capture ideas, thoughts, lessons, and anything worth
                remembering.
              </p>
            </div>

            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center">
              <StickyNote size={25} />
            </div>
          </div>

          {/* Note count */}

          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-2xl bg-white/10 text-xs text-white/80">
            <StickyNote size={14} />
            {notes.length} {notes.length === 1 ? "note" : "notes"} saved
          </div>
        </div>
      </section>

      {/* =================================================
          ERROR
      ================================================= */}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-red-50 border border-red-100 text-sm text-red-600"
        >
          <span>{error}</span>

          <button onClick={() => setError(null)} className="cursor-pointer">
            <X size={16} />
          </button>
        </motion.div>
      )}

      {/* =================================================
          CREATE NOTE
      ================================================= */}

      <section>
        <div className="flex items-center gap-2 mb-3">
          <Plus size={16} className="text-[var(--TextColor)]" />

          <h2 className="font-bold text-sm">Create a note</h2>
        </div>

        <div className="clay-soft p-3 md:p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 border border-neutral-200 focus-within:ring-2 focus-within:ring-[var(--TextColor)] transition-all">
              <NotebookPen size={18} className="text-neutral-400 shrink-0" />

              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    addNote();
                  }
                }}
                placeholder="Write something worth remembering..."
                className="outline-none bg-transparent w-full text-sm text-neutral-700 placeholder:text-neutral-400"
              />
            </div>

            <button
              onClick={addNote}
              disabled={!input.trim()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[var(--TextColor)] text-white text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-40 disabled:hover:translate-y-0 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <Plus size={17} />
              Add Note
            </button>
          </div>

          <p className="text-[11px] text-neutral-400 mt-3 px-1">
            Press Enter to quickly save your note.
          </p>
        </div>
      </section>

      {/* =================================================
          NOTES
      ================================================= */}

      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold">Your thoughts</h2>

            <p className="text-xs text-neutral-400 mt-1">
              Everything you've saved so far.
            </p>
          </div>

          {notes.length > 0 && (
            <span className="px-3 py-1.5 rounded-xl border border-neutral-200 bg-white text-xs font-semibold text-neutral-500">
              {notes.length}
            </span>
          )}
        </div>

        {notes.length === 0 ? (
          /* =================================================
              EMPTY STATE
          ================================================= */

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="clay-soft py-14 px-6 text-center"
          >
            <div className="mx-auto w-16 h-16 rounded-[22px] bg-white flex items-center justify-center text-[var(--TextColor)] shadow-[5px_5px_15px_rgba(180,190,205,0.2)]">
              <NotebookPen size={25} />
            </div>

            <h3 className="text-lg font-bold mt-5">Your notebook is empty</h3>

            <p className="text-sm text-neutral-400 max-w-sm mx-auto mt-2">
              Write down an idea, a lesson from the book, or something you don't
              want to forget.
            </p>
          </motion.div>
        ) : (
          <div className="grid gap-4">
            <AnimatePresence>
              {notes.map((note, index) => (
                <motion.article
                  key={note.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="clay-soft p-5 group"
                >
                  {/* Top progress accent */}

                  <div className="h-1 w-20 ml-auto rounded-full bg-[var(--TextColor)]/20 mb-5 group-hover:w-40 transition-all" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      {/* Note icon */}

                      <div className="shrink-0 w-10 h-10 rounded-xl bg-[var(--TextColor)]/10 text-[var(--TextColor)] flex items-center justify-center">
                        <StickyNote size={18} />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] uppercase tracking-widest font-bold text-neutral-400">
                            Note #{index + 1}
                          </span>
                        </div>

                        <p className="text-sm md:text-base font-medium text-neutral-700 leading-relaxed break-words">
                          {note.title}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteNote(note.id)}
                      title="Delete note"
                      className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-neutral-300 hover:text-red-500 hover:bg-red-50 transition-all cursor-pointer"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>

                  {/* Bottom accent */}

                  <div className="h-1 w-10 rounded-full bg-[var(--TextColor)]/20 mt-5 group-hover:w-16 transition-all" />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* =================================================
          FOOTER TIP
      ================================================= */}

      <div className="flex justify-center pt-2">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <Sparkles size={13} className="text-[var(--TextColor)]" />
          Small thoughts can become big ideas.
        </div>
      </div>
    </div>
  );
};

export default Notes;
