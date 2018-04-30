import { User } from '../../database/User';

export const viewAllUser = () => {
  return new Promise((resolve, reject) => {
    User.find((err, useres) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(useres);
    });
  });
};

export const viewUserByID = _id => {
  return new Promise((resolve, reject) => {
    User.findById(_id, (err, user) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve(user);
    });
  });
};

export const createUser = user => {
  return new Promise((resolve, reject) => {
    const newUser = new User(user);

    newUser.save((err, user) => {
      if (err) {
        console.log(err);
        return reject(500);
      }

      return resolve(user);
    });
  });
};

export const deleteUser = _id => {
  return new Promise((resolve, reject) => {
    User.findOneAndRemove({ _id }, err => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      return resolve();
    });
  });
};

export const editUser = (_id, { email, name, password, userType, classes }) => {
  return new Promise((resolve, reject) => {
    User.findById(_id, (err, user) => {
      if (err) {
        console.log(err);
        return reject(500);
      }
      if (!user) {
        return reject(404);
      }
      user.email = email;
      user.name = name;
      user.password = password;
      user.userType = userType;
      user.classes = classes;

      user.save((err, newUser) => {
        if (err) {
          console.log(err);
          return reject(500);
        }
        return resolve(newUser);
      });
    });
  });
};
