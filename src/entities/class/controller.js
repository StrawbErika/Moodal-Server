import { Class } from '../../database/Class';

export const viewAllClass = () => {
  return new Promise((resolve, reject) => {
    Class.find((err, _classes) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(_classes);
    });
  });
};

export const viewClassByID = _id => {
  return new Promise((resolve, reject) => {
    Class.findById(_id, (err, _class) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(_class);
    });
  });
};

export const createClass = _class => {
  return new Promise((resolve, reject) => {
    const newClass = new Class(_class);

    newClass.save((err, _class) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(_class);
    });
  });
};

export const deleteClass = _id => {
  return new Promise((resolve, reject) => {
    Class.findOneAndRemove({ _id }, err => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve();
    });
  });
};

export const editClass = (
  _id,
  { classId, title, section, posts, students, canPost, canComment, teachers }
) => {
  return new Promise((resolve, reject) => {
    Class.findById(_id, (err, _class) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      if (!_class) {
        return reject(404);
      }

      _class.classId = classId;
      _class.title = title;
      _class.section = section;
      _class.posts = posts;
      _class.students = students;
      _class.canPost = canPost;
      _class.canComment = canComment;
      _class.teachers = teachers;

      _class.save((err, newClass) => {
        if (err) {
          console.log(err);
          return reject(500);
        }
        return resolve(newClass);
      });
    });
  });
};
