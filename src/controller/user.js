const UserModel = require('../model/user');
const _ = require('lodash');

function User() {

}

User.prototype.create = function (user) {
  user.created = new Date();
  let userModel = new UserModel(user);

  return userModel.save()
    .then(function (createdUser) {
      console.info('User has been created: ', createdUser);
      return {'id': createdUser._id, 'username': createdUser.username};
    })
    .catch(function (e) {
      console.error('Error while saving user: ', e);
      return {'error': e};
    });
};

User.prototype.update = function (user) {

  let toUpdate = _.pick(user, ['username', 'password', 'email', 'dateOfBirth']);

  UserModel.update({'_id': user.id}, {$set: toUpdate})
    .then(function (success) {
      console.info('User has been updated: ', success);
    })
    .catch(function (e) {
      console.error('Error while saving user: ', e);
    });
};

User.prototype.findById = function (user) {

};

User.prototype.findOne = function (search) {
  let user = new UserModel();

  UserModel.findOne(search)
    .then(function (user) {
      console.info('User has been created: ', user);
    })
    .catch(function (e) {
      console.error('Error while saving user: ', e);
    });
};

User.prototype.find = function (search) {
  let user = new UserModel();

  UserModel.find(search)
    .then(function (user) {
      console.info('User has been created: ', user);
    })
    .catch(function (e) {
      console.error('Error while saving user: ', e);
    });
};

User.prototype.login = function (credentials) {
  return UserModel.findOne({username: credentials.username})
    .then(function (user) {
      if (user.password === credentials.password) {
        //create token
        console.info('User login: ', user);
        return {username: user.username};
      }
    })
    .catch(function (e) {
      console.error('Error while doing log in: ', e);
      return {'error': e};
    });
};

module.exports = User;