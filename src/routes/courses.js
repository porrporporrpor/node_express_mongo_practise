const express = require('express');

const router = express.Router();
const {
  getAllCourse,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourseById,
} = require('../controllers/courses');

router.route('/').get(getAllCourse);

router.route('/:id').get(getCourseById);

router.route('/').post(createCourse);

router.route('/:id').put(updateCourse);

router.route('/:id').delete(deleteCourseById);

module.exports = router;
