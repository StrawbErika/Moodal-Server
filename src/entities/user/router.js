import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

//Gets all user
router.get('/api/user', async (req, res) => {
  try {
    const users = await Ctrl.viewAllUser(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all users',
      data: users
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Users not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

router.get('/api/teachers', async (req, res) => {
  try {
    const users = await Ctrl.getUserReferencesByClassId(req.query);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched user',
      data: users
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'User not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Gets user by id
router.get('/api/user/:_id', async (req, res) => {
  try {
    const users = await Ctrl.viewUserByID(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched user',
      data: users
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'User not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

// Gets students by classId
router.get('/api/students', async (req, res) => {
  try {
    const students = await Ctrl.viewAllStudentsByClassId(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all students',
      data: students
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Students not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

// Gets students by classId
router.get('/api/teachers', async (req, res) => {
  try {
    const teachers = await Ctrl.viewAllTeachersByClassId(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all teachers',
      data: teachers
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Teachers not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Adds a user
router.post('/api/user', async (req, res) => {
  if (
    req.body.email &&
    req.body.name &&
    req.body.password &&
    req.body.userType &&
    req.body.classes
  ) {
    try {
      await Ctrl.createUser(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully created user'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Deletes a user
router.delete('/api/user/:_id', async (req, res) => {
  if (req.params._id) {
    try {
      await Ctrl.deleteUser(req.params);
      res.status(200).json({
        status: 200,
        message: 'Successfully removed user'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Edits/Updates a user
router.put('/api/user/:_id', async (req, res) => {
  if (
    req.params._id &&
    req.body.email &&
    req.body.name &&
    req.body.password &&
    req.body.userType &&
    req.body.classes
  ) {
    try {
      await Ctrl.editUser(req.params, req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully edited the user'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
