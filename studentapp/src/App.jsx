import React, { useEffect, useState } from 'react';
import StudentList from './Studentlist';
import { fetchStudents, createStudent, updateStudent, deleteStudent } from './Api';
import StudentForm from './StudentForm';
import { FiUserPlus } from 'react-icons/fi';

export default function App() {
  const [students, setStudents] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await fetchStudents();
      setStudents(data || []);
    } catch (err) {
      console.log(err);
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const handleCreate = async (payload) => {
    const res = await createStudent(payload);
    setStudents(prev => [res, ...prev]);
  };

  const handleUpdate = async (id, payload) => {
    const res = await updateStudent(id, payload);
    setStudents(prev => prev.map(s => s._id === id ? res : s));
    setEditing(null);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents(prev => prev.filter(s => s._id !== id));
  };

  return (
    <div className=" flex flex-col mx-auto p-4 space-y-4">
      <header className="mb-4">
        <h1 className="text-3xl font-bold mb-1">Student Management</h1>
        <br />
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-center gap-2 mb-2">
            <FiUserPlus size={18} />
            <h2 className="font-semibold">Add / Edit Student</h2>
          </div>

          <StudentForm
            key={editing ? editing._id : 'new'}
            initial={editing}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
            onCancel={() => setEditing(null)}
          />
        </div>

        <div className="p-4 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold">Students</h2>
            <div className="text-sm text-gray-500">{loading ? 'Loading...' : `${students.length} total`}</div>
          </div>

          <StudentList
            students={students}
            onEdit={(s) => setEditing(s)}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
