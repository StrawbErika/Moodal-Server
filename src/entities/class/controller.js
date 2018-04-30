import { Class } from '../../database';

export const createClass = _class => {
  return new Promise((resolve, reject) => {
    const newClass = new Class({ ..._class });

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

export const editClass = (_id, { title, section, posts, students }) => {
  return new Promise((resolve, reject) => {
    Class.findById(_id, (err, _class) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      if (!_class) {
        return reject(404);
      }

      _class.title = title;
      _class.section = section;
      _class.posts = posts;
      _class.students = students;
    });
  });
};
