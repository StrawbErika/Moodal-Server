import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

//Gets all class
router.get('/api/class', async (req, res) => {
  try {
    const classes = await Ctrl.viewAllClass(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all classes',
      data: classes
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Class not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Gets class by id
router.get('/api/class/:_id', async (req, res) => {
  try {
    const classes = await Ctrl.viewClassByID(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched class',
      data: classes
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Class not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Adds a class
router.post('/api/class', async (req, res) => {
  if (
    req.body.title &&
    req.body.section &&
    req.body.students &&
    req.body.posts &&
    req.body.canPost &&
    req.body.canComment
  ) {
    try {
      await Ctrl.createClass(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully created class'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Deletes a class
router.delete('/api/class', async (req, res) => {
  if (req.body._id) {
    try {
      await Ctrl.deleteClass(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully removed class'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Edits/Updates a class
router.put('/api/class/:_id', async (req, res) => {
  if (
    req.params._id &&
    req.body.title &&
    req.body.section &&
    req.body.students &&
    req.body.posts &&
    req.body.canComment &&
    req.body.canPost
  ) {
    try {
      await Ctrl.editClass(req.params, req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully edited the class'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
