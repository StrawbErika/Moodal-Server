import { Message } from '../../database/Message';
import { $for } from 'core-js/library/web/timers';

export const viewAllMessage = () => {
  return new Promise((resolve, reject) => {
    Message.find((err, messages) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(messages);
    });
  });
};

export const viewAllMessagesByUserId = ({ userId }) => {
  return new Promise((resolve, reject) => {
    Message.find(
      { $or: [{ sender: userId }, { recipient: userId }] },
      (err, messages) => {
        if (err) {
          console.log(err);
          return reject(500);
        }
        return resolve(messages);
      }
    );
  });
};

export const viewMessageByID = _id => {
  return new Promise((resolve, reject) => {
    Message.findById(_id, (err, message) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(message);
    });
  });
};

export const createMessage = message => {
  return new Promise((resolve, reject) => {
    const newMessage = new Message(message);

    newMessage.save((err, message) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(message);
    });
  });
};

export const deleteMessage = _id => {
  return new Promise((resolve, reject) => {
    Message.findOneAndRemove({ _id }, err => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve();
    });
  });
};

export const editMessage = (
  _id,
  { sender, recipient, content, timestamp, title, isRead }
) => {
  return new Promise((resolve, reject) => {
    Message.findById(_id, (err, message) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      if (!message) {
        return reject(404);
      }

      message.sender = sender;
      message.recipient = recipient;
      message.title = title;
      message.content = content;
      message.timestamp = timestamp;
      message.isRead = isRead;

      message.save((err, newMessage) => {
        if (err) {
          console.log(err);
          return reject(500);
        }
        return resolve(newMessage);
      });
    });
  });
};
