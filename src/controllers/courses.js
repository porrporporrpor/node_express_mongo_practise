const Course = require('../models/course');
const Joi = require('joi');

const getAllCourse = (req, res) => {
  Course.find()
    .then((resp) => res.status(200).send(resp))
    .catch((e) => res.status(500).send(e));
};

const getCourseById = (req, res) => {
  Course.findById(req.params.id)
    .then((resp) => {
      if (!resp) {
        res
          .status(500)
          .send({ msg: `Cannot find course of this id : ${req.params.id}` });
        return;
      }
      res.status(200).send(resp);
    })
    .catch((e) => res.status(500).send(e));
};

const createCourse = (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const validate = schema.validate(req.body);

  if (validate.error) {
    res.status(500).send(validate.error.details[0].message);
    i;
    return;
  }

  const newlyCourse = new Course({ name: req.body.name });
  newlyCourse
    .save()
    .then((resp) => res.status(200).send(resp))
    .catch((e) => res.status(500).send(e));
};

const updateCourse = (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const validate = schema.validate(req.body);

  if (validate.error) {
    res.status(500).send(validate.error.details[0].message);
    i;
    return;
  }

  Course.findByIdAndUpdate(req.params.id, { name: req.body.name }).then(
    (resp) => {
      if (!resp) {
        res.status(500).send(`Course not found with id : ${req.params.id}`);
        return;
      }
      res.status(200).send(resp);
    }
  );
};

const deleteCourseById = (req, res) => {
  Course.findByIdAndRemove(req.params.id)
    .then((resp) => {
      if (!resp) {
        res
          .status(404)
          .send({ msg: `Course not found with id : ${req.params.id}` });
        return;
      }
      res.status(200).send({ msg: 'Delete course successfully.' });
    })
    .catch((e) => res.status(500).send(e));
};

module.exports = {
  getAllCourse,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourseById,
};
