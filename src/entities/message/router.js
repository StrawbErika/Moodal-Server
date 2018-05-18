import { Router } from 'express';
import * as Ctrl from './controller';

const router = Router();

//Gets all message
// router.get('/api/message', async (req, res) => {
//   try {
//     const messages = await Ctrl.viewAllMessage(req.body);
//     res.status(200).json({
//       status: 200,
//       message: 'Successfully fetched all messages',
//       data: messages
//     });
//   } catch (status) {
//     let message = '';
//     switch (status) {
//       case 404:
//         message = 'Message not found';
//         break;
//       case 500:
//         message = 'Internal server error';
//         break;
//     }
//     res.status(status).json({ status, message });
//   }
// });

router.get('/api/message', async (req, res) => {
  try {
    const messages = await Ctrl.viewAllMessagesByUserId(req.body);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched all messages',
      data: messages
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Message not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Gets message by id
router.get('/api/message/:_id', async (req, res) => {
  try {
    const messages = await Ctrl.viewMessageByID(req.params);
    res.status(200).json({
      status: 200,
      message: 'Successfully fetched message',
      data: messages
    });
  } catch (status) {
    let message = '';
    switch (status) {
      case 404:
        message = 'Message not found';
        break;
      case 500:
        message = 'Internal server error';
        break;
    }
    res.status(status).json({ status, message });
  }
});

//Adds a message
router.post('/api/message', async (req, res) => {
  if (
    req.body.sender &&
    req.body.recipient &&
    req.body.content &&
    req.body.timestamp &&
    req.body.title &&
    req.body.isRead
  ) {
    try {
      await Ctrl.createMessage(req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully created message'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Deletes a message
router.delete('/api/message/:_id', async (req, res) => {
  if (req.params._id) {
    try {
      await Ctrl.deleteMessage(req.params);
      res.status(200).json({
        status: 200,
        message: 'Successfully removed message'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

//Edits/Updates a message
router.put('/api/message/:_id', async (req, res) => {
  if (
    req.params._id &&
    req.body.sender &&
    req.body.recipient &&
    req.body.content &&
    req.body.timestamp &&
    req.body.title &&
    req.body.isRead
  ) {
    try {
      await Ctrl.editMessage(req.params, req.body);
      res.status(200).json({
        status: 200,
        message: 'Successfully edited the message'
      });
    } catch (status) {
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(400).json({ status: 400, message: 'Bad request' });
  }
});

export default router;
