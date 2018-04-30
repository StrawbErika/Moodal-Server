import { Router } from 'express';
import * as Ctrl from './controller';
const router = Router();

//Gets all comment
router.get('/api/comment', async (req, res) => {
  try {
    const comments = await Ctrl.viewAllComment(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all comments',
      data: comments
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Comment not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Gets comment by id
router.get('/api/comment/:_id', async (req, res) => {
  try {
    const comments = await Ctrl.viewCommentByID(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched comment',
      data: comments
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Comment not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Adds a comment
router.post('/api/comment', async (req, res) => {
  if (
    req.body.author &&
    req.body.content &&
    req.body.timestamp &&
    req.body.likeCount
  ) {
    try {
      await Ctrl.createComment(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully created comment'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Deletes a comment
router.delete('/api/comment/:_id', async (req, res) => {
  if (req.params._id) {
    try {
      await Ctrl.deleteComment(req.params);
      res.status(200).json({
        status: 200,
        message: 'Successfully removed comment'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Edits/Updates a comment
router.put('/api/comment/:_id', async (req, res) => {
  if (
    req.params._id &&
    req.body.author &&
    req.body.content &&
    req.body.timestamp &&
    req.body.likeCount
  ) {
    try {
      await Ctrl.editComment(req.params, req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully edited the comment'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
