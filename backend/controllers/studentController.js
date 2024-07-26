const Attendance = require('../models/Attendance');

exports.getAttendance = async (req, res) => {
  const { studentId } = req.params;

  const attendanceRecords = await Attendance.find({ student: studentId });
  res.send(attendanceRecords);
};
