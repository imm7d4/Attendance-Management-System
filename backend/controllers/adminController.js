const Class = require('../models/Class');
const Subject = require('../models/Subject');
const User = require('../models/User');
const Attendance = require('../models/Attendance');

exports.assignClass = async (req, res) => {
  const { classId, studentId } = req.body;

  const classData = await Class.findById(classId);
  classData.students.push(studentId);
  try {
    const updatedClass = await classData.save();
    res.send(updatedClass);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.editAttendance = async (req, res) => {
  const { attendanceId, status } = req.body;

  const attendance = await Attendance.findById(attendanceId);
  attendance.status = status;
  try {
    const updatedAttendance = await attendance.save();
    res.send(updatedAttendance);
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.createClass = async (req, res) => {
  const { name } = req.body;

  const newClass = new Class({ name });
  try {
    const savedClass = await newClass.save();
    res.send(savedClass);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.createSubject = async (req, res) => {
  const { name, teacherId } = req.body;

  const newSubject = new Subject({ name, teacher: teacherId });
  try {
    const savedSubject = await newSubject.save();
    res.send(savedSubject);
  } catch (err) {
    res.status(400).send(err);
  }
};
exports.createClass = async (req, res) => {
  const { name } = req.body;

  const newClass = new Class({ name });
  try {
    const savedClass = await newClass.save();
    res.send(savedClass);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.createSubject = async (req, res) => {
  const { name, teacherId } = req.body;

  const newSubject = new Subject({ name, teacher: teacherId });
  try {
    const savedSubject = await newSubject.save();
    res.send(savedSubject);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getTeachers = async (req, res) => {
  try {
    const teachers = await User.find({ role: 'teacher' }).select('username _id');
    res.send(teachers);
  } catch (err) {
    res.status(400).send(err);
  }
};
