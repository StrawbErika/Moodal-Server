import { Post } from '../../database';

// export const getPosts = () => {
//   return new Promise((resolve, reject) => {
//     Post.aggregate([
//       {
//         $group: {
//           _id: $classId,
//           posts: {
//             $push: {
//               author: '$author',
//               content: '$content',
//               timestamp: '$timestamp',
//               comments: '$comments'
//             }
//           }
//         }
//       },
//       {
//           $project: {
//               _id: 0,

//           }
//       }
//     ]);
//   });
// };
