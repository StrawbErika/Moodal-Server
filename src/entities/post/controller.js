import { Post } from '../../database/Post';

// export const viewAllPost = () => {
//   return new Promise((resolve, reject) => {
//     Post.find((err, posts) => {
//       if (err) {
//         console.log(err);
//         return reject(500);
//       }
//       return resolve(posts);
//     });
//   });
// };

export const viewAllPostsByClassId = ({ classId }) => {
  return new Promise((resolve, reject) => {
    Post.find({ classId }, (err, posts) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(posts);
    });
  });
};

export const viewPostByID = _id => {
  return new Promise((resolve, reject) => {
    Post.findById(_id, (err, post) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(post);
    });
  });
};

export const createPost = post => {
  return new Promise((resolve, reject) => {
    const newPost = new Post(post);

    newPost.save((err, post) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(post);
    });
  });
};

export const deletePost = _id => {
  return new Promise((resolve, reject) => {
    Post.findOneAndRemove({ _id }, err => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve();
    });
  });
};

export const editPost = (
  _id,
  { author, content, timestamp, comments, classId }
) => {
  return new Promise((resolve, reject) => {
    Post.findById(_id, (err, post) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      if (!post) {
        return reject(404);
      }
      post.author = author;
      post.content = content;
      post.timestamp = timestamp;
      post.comments = comments;
      post.classId = classId;

      post.save((err, newPost) => {
        if (err) {
          console.log(err);
          return reject(500);
        }
        return resolve(newPost);
      });
    });
  });
};
