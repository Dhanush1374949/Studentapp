import React, { useEffect, useState } from 'react';

export default function StudentForm({ initial = null, onCreate, onUpdate, onCancel }) {
  const [form, setForm] = useState({ name: '', email: '', roll: '', course: '' });

  useEffect(() => {
    if (initial) setForm({ name: initial.name, email: initial.email, roll: initial.roll, course: initial.course || '' });
    else setForm({ name: '', email: '', roll: '', course: '' });
  }, [initial]);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.roll) return alert('Name, email, and roll are required');
    if (initial) onUpdate(initial._id, form);
    else onCreate(form);
    setForm({ name: '', email: '', roll: '', course: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="w-full p-2 border rounded" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
      <input name="roll" value={form.roll} onChange={handleChange} placeholder="Roll number" className="w-full p-2 border rounded" />
      <input name="course" value={form.course} onChange={handleChange} placeholder="Course (optional)" className="w-full p-2 border rounded" />

      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          {initial ? 'Update' : 'Add'}
        </button>
        {initial && (
          <button type="button" onClick={onCancel} className="px-4 py-2 border  text-white rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
