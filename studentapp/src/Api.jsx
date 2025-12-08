const API_BASE = `${import.meta.env.VITE_React_APP_API_URL}`;

export const fetchStudents = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const createStudent = async (data) => {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateStudent = async (id, data) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteStudent = async (id) => {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
