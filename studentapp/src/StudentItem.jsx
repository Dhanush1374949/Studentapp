import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function StudentItem({ student, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between p-2 border-b last:border-b-0">
      <div>
        <div className="font-medium">{student.name} <span className="text-xs text-gray-500">({student.roll})</span></div>
        <div className="text-sm text-gray-600">{student.email} {student.course ? `· ${student.course}` : ''}</div>
      </div>

      <div className="flex gap-2">
        <button onClick={() => onEdit(student)} title="Edit" className="p-1 rounded text-white hover:bg-gray-100">
          <FiEdit2 />
        </button>
        <button onClick={() => { if (confirm('Delete this student?')) onDelete(student._id); }} title="Delete" className="p-1 rounded text-white hover:bg-gray-100">
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}
