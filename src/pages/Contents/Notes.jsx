import React, { useState, useEffect } from 'react'
import { NotebookPen, Trash2 } from 'lucide-react'
import axios from 'axios'
import { motion, AnimatePresence } from "framer-motion";

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [message, setMessage] = useState(false)


    // Fetch notes from backend on mount
    useEffect(() => {
        axios.get('https://think-and-grow-rich-server.onrender.com/notes')
            .then(res => {
                setNotes(res.data)
                setLoading(false)
            })
            .catch(err => {
                setError('Failed to load notes')
                setLoading(false)
            })
    }, [])

    // Add new note via POST to backend
    const addNote = () => {
        const trimmed = input.trim()
        if (!trimmed) return

        // Example: send title and content both as input for now
        axios.post('https://think-and-grow-rich-server.onrender.com/notes', { title: trimmed, content: trimmed })
            .then(res => {
                setNotes(prev => [...prev, res.data])
                setInput('')
                setMessage(true)
                setTimeout(() => setMessage(false), 3000)
            })
            .catch(() => {
                setError('Failed to add note')
            })
    }

    // Delete note locally (you can later add backend delete)
    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
        axios.delete(`https://think-and-grow-rich-server.onrender.com/notes/${id}`)
            .then(() => {
                setNotes(notes.filter(note => note.id !== id))
            })
            .catch(() => {
                setError("Failed to delete note");
            })
    }


    if (loading) return <p>Loading notes...</p>
    if (error) return <p className="text-red-500">{error}</p>

    return (
        <div className="max-w-xl mx-auto p-5">

            {message && (
                <AnimatePresence>
                    <motion.div
                        role="alert"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xs md:max-w-sm lg:max-w-md text-sm p-3 rounded-md bg-green-100 text-green-700 border border-green-200 text-center"
                    >
                        Added a note
                    </motion.div>
                </AnimatePresence>
            )}

            <h1 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <NotebookPen /> Notes
            </h1>

            <div className="grid md:flex gap-2 mb-4">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            addNote()
                        }
                    }}
                    placeholder="Write a note..."
                    className="flex-1 border border-neutral-200 focus:ring-2 ring-[var(--TextColor)] outline-none p-2 rounded-md"
                />
                <button
                    onClick={addNote}
                    className="py-2 bg-[var(--TextColor)] cursor-pointer text-white px-4 rounded-md hover:opacity-80 transition-all"
                >
                    Add
                </button>
            </div>

            {notes.length === 0 ? (
                <p className="text-neutral-500">No notes added yet.</p>
            ) : (
                <ul className="space-y-3">
                    
                    <p className='text-sm text-[var(--TextColor))]'>{notes.length} {notes.length > 1 ? "note's" : "note"} added</p>
                    
                    {notes.map(note => (
                        <li
                            key={note.id}
                            className=" p-4 rounded-md border border-neutral-100"
                        >
                            <div className="flex justify-between items-start gap-2">
                                <span className="break-words w-full">{note.title}</span>
                                <button
                                    onClick={() => deleteNote(note.id)}
                                    className="cursor-pointer bg-white text-red-500 hover:text-red-600 flex-shrink-0"
                                    title="Delete"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </li>
                    ))}

                </ul>
            )}
        </div>
    )
}

export default Notes
