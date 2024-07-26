const express = require('express');
const studentController = require('../controllers/studentController');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/attendance', authMiddleware, roleMiddleware(['student']), studentController.getAttendance);

module.exports = router;