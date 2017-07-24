const UserModel = require('../model/user');
const _ = require('lodash');

function User() {

}

User.prototype.create = function (user) {
  user.created = new Date();
  let user = new UserModel(user);

  return user.save()
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
  user.created = new Date();
  var user = new UserModel(user);

  user.save()
    .then(function (success) {
      console.info('User has been created: ', success);
    })
    .catch(function (e) {
      console.error('Error while saving user: ', e);
    });
};

User.prototype.findByUsername = function (username) {
  var user = new UserModel();

  UserModel.findOne({username: username})
    .then(function (user) {
      console.info('User has been created: ', user);
    })
    .catch(function (e) {
      console.error('Error while saving user: ', e);
    });
};

module.exports = User;