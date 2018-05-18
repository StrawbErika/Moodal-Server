import { Comment } from '../../database/Comment';
import { Post } from '../../database/Post';

export const viewAllComment = () => {
  return new Promise((resolve, reject) => {
    Comment.find((err, comments) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(comments);
    });
  });
};

export const viewCommentByID = _id => {
  return new Promise((resolve, reject) => {
    Comment.findById(_id, (err, comment) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(comment);
    });
  });
};

export const createComment = comment => {
  // return new Promise((resolve, reject) => {
  //   const newComment = new Comment(comment);

  //   newComment.save((err, comment) => {
  //     if (err) {
  //       console.log(err);
  //       return reject(500);
  //     }

  //     return resolve(comment);
  //   });
  // });
  return new Promise(async (resolve, reject) => {
    try {
      const newComment = new Comment(comment);
      console.log(newComment);
      await newComment.save();
      const post = await Post.findById(newComment.postId);
      post.comments = [...post.comments, newComment._id];
      await post.save();
      return resolve(newComment);
    } catch (err) {
      return reject(500);
    }
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
    Comment.findById(_id, (err, comment) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      if (!comment) {
        return reject(404);
      }
      comment.author = author;
      comment.content = content;
      comment.timestamp = timestamp;
      comment.likeCount = likeCount;
      comment.postId = postId;

      comment.save((err, newComment) => {
        if (err) {
          console.log(err);
          return reject(500);
        }
        return resolve(newComment);
      });
    });
  });
};
