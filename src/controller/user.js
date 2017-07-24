const UserModel = require('../model/user');

function User() {

}

User.prototype.create = function (user) {
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

module.exports = User;