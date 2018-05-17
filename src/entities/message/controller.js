import { Message } from '../../database/Message';

export const viewAllMessage = userId => {
  return new Promise((resolve, reject) => {
    Message.find(userId, (err, messages) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(messages);
    });
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

export const editMessage = (_id, { sender, recipient, content, timestamp }) => {
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
      message.content = content;
      message.timestamp = timestamp;

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
