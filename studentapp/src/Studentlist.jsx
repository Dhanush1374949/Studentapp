import React from 'react';
import StudentItem from './StudentItem';

export default function StudentList({ students, onEdit, onDelete }) {
  if (!students.length) return <div className="text-sm text-gray-500">No students yet.</div>;
  return (
    <div className="divide-y">
      {students.map(s => (
        <StudentItem key={s._id} student={s} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}