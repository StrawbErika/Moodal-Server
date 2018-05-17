import { Comment } from '../../database/Comment';

export const viewAllComment = () => {
  return new Promise((resolve, reject) => {
    Comment.find((err, commmentes) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(commmentes);
    });
  });
};

export const viewCommentByID = _id => {
  return new Promise((resolve, reject) => {
    Comment.findById(_id, (err, commment) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(commment);
    });
  });
};

export const createComment = commment => {
  return new Promise((resolve, reject) => {
    const newComment = new Comment(commment);

    newComment.save((err, commment) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(commment);
    });
  });
};

export const deleteComment = _id => {
  return new Promise((resolve, reject) => {
    Comment.findOneAndRemove({ _id }, err => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve();
    });
  });
};

export const editComment = (
  _id,
  { author, content, timestamp, likeCount, postId }
) => {
  return new Promise((resolve, reject) => {
    Comment.findById(_id, (err, commment) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      if (!commment) {
        return reject(404);
      }
      commment.author = author;
      commment.content = content;
      commment.timestamp = timestamp;
      commment.likeCount = likeCount;
      comment.postId = postId;

      commment.save((err, newComment) => {
        if (err) {
          console.log(err);
          return reject(500);
        }
        return resolve(newComment);
      });
    });
  });
};
