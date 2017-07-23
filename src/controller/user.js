const UserModel = require('../model/user');

function User() {

}

User.prototype.create = function () {
  var phelipe = new UserModel({id: 123, name: 'Phelipe'});

  phelipe.save();
}

module.exports = User;