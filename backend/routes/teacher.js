const express = require('express');
const teacherController = require('../controllers/teacherController');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/mark-attendance', authMiddleware, roleMiddleware(['teacher']), teacherController.markAttendance);

module.exports = router;