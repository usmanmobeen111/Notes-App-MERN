import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import NoteForm from '../components/NoteForm';
import NoteCard from '../components/NoteCard';
import { fetchNotes, createNote, updateNote as apiUpdateNote, deleteNote as apiDeleteNote } from '../api/notes';
import Footer from '../components/Footer';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Load notes from backend API on mount
  useEffect(() => {
    const loadNotes = async () => {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    };
    loadNotes();
  }, []);

  const addNote = async (noteData) => {
    try {
      const newNote = await createNote(noteData);
      setNotes(prev => [newNote, ...prev]);
    } catch (error) {
      console.error('Failed to add note:', error);
    }
  };

  const updateNote = async (noteData) => {
    try {
      const updated = await apiUpdateNote(editingNote._id, noteData);
      setNotes(prev => prev.map(note =>
        note._id === editingNote._id ? updated : note
      ));
      setEditingNote(null);
    } catch (error) {
      console.error('Failed to update note:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await apiDeleteNote(id);
      setNotes(prev => prev.filter(note => note._id !== id));
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  const handleEdit = (note) => {
    setEditingNote(note);
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div>
          <NoteForm
            onSubmit={editingNote ? updateNote : addNote}
            initialData={editingNote}
            onCancel={editingNote ? handleCancelEdit : null}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Your Notes ({notes.length})
          </h2>
        </div>

        <AnimatePresence>
          {notes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No notes yet</h3>
              <p className="text-gray-500">Create your first note above!</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {notes.map(note => (
                  <NoteCard
                    key={note._id}
                    note={note}
                    onEdit={handleEdit}
                    onDelete={deleteNote}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
