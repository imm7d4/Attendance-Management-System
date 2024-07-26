const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

router.post('/create-class', authMiddleware, roleMiddleware(['admin']), adminController.createClass);
router.post('/create-subject', authMiddleware, roleMiddleware(['admin']), adminController.createSubject);
router.get('/teachers', authMiddleware, roleMiddleware(['admin']), adminController.getTeachers);
router.post('/create-class', authMiddleware, roleMiddleware(['admin']), adminController.createClass);
router.post('/create-subject', authMiddleware, roleMiddleware(['admin']), adminController.createSubject);
router.post('/assign-class', authMiddleware, adminController.assignClass);
router.put('/attendance', authMiddleware, adminController.editAttendance);

module.exports = router;
