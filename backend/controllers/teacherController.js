const Attendance = require('../models/Attendance');
const User = require('../models/User');
const { sendNotification } = require('../utils/notifications');

exports.markAttendance = async (req, res) => {
  const { studentId, classId, date, status } = req.body;

  const attendance = new Attendance({ student: studentId, class: classId, date, status });
  try {
    const savedAttendance = await attendance.save();

    const student = await User.findById(studentId);
    sendNotification(student.profile.email, 'Attendance Marked', `Your attendance for ${date} is marked as ${status}.`);

    res.send(savedAttendance);
  } catch (err) {
    res.status(400).send(err);
  }
};