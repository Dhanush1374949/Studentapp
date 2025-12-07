const Student = require('../models/Student');

exports.getAll = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.create = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
};

exports.update = async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.remove = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
};
