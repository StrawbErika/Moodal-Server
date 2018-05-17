import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

//Gets all post
router.get('/api/post', async (req, res) => {
  try {
    const posts = await Ctrl.viewAllPostsByClassId(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all posts',
      data: posts
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Post not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Gets post by id
router.get('/api/post/:_id', async (req, res) => {
  try {
    const posts = await Ctrl.viewPostByID(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched post',
      data: posts
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Post not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Adds a post
router.post('/api/post', async (req, res) => {
  if (
    req.body.author &&
    req.body.content &&
    req.body.timestamp &&
    req.body.comments &&
    req.body.classId
  ) {
    try {
      await Ctrl.createPost(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully created post'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Deletes a post
router.delete('/api/post/:_id', async (req, res) => {
  if (req.params._id) {
    try {
      await Ctrl.deletePost(req.params);
      res.status(200).json({
        status: 200,
        message: 'Successfully removed post'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Edits/Updates a post
router.put('/api/post/:_id', async (req, res) => {
  if (
    req.params._id &&
    req.body.author &&
    req.body.content &&
    req.body.timestamp &&
    req.body.comments &&
    req.body.classId
  ) {
    try {
      await Ctrl.editPost(req.params, req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully edited the post'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
