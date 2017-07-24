const mongoose = require('mongoose');
const BaseSchema = require('../util/BaseSchema');
const dateChangesPlugin = require('../util/customSchema');
const Schema = mongoose.Schema;

const userSchema = new Schema({ name: String,
    facebookId: String,
    email: String,
    username: {type: String, required: true},
    password: {type: String, required: true},
    dateOfBirth: Date });

userSchema.add(BaseSchema);

userSchema.plugin(dateChangesPlugin);

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;