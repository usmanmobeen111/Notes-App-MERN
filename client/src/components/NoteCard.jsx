import React from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa';

const NoteCard = ({ note, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {note.title || 'Untitled'}
        </h3>
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onEdit(note)}
            className="text-blue-500 hover:text-blue-700 transition-colors p-1"
            title="Edit note"
          >
            <FaEdit />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDelete(note._id)}
            className="text-red-500 hover:text-red-700 transition-colors p-1"
            title="Delete note"
          >
            <FaTrash />
          </motion.button>
        </div>
      </div>
      <p className="text-gray-600 mb-3 line-clamp-3 whitespace-pre-wrap">
        {note.content || 'No content'}
      </p>
      {note.createdAt && (
        <p className="text-xs text-gray-400">
          Created: {formatDate(note.createdAt)}
        </p>
      )}
      {note.updatedAt && note.updatedAt !== note.createdAt && (
        <p className="text-xs text-gray-400">
          Updated: {formatDate(note.updatedAt)}
        </p>
      )}
    </motion.div>
  );
};

export default NoteCard;
