const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  // ... other user fields like email, passwordHash, etc.
  email: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  role: {
    type: String,
    enum: ['Admin', 'Developer', 'ProjectUser'],
    required: true
  }
  // ... potentially other fields
});

userSchema.methods.setPassword = function(password){
  this.hash = bcrypt.hashSync(password, 10);
};

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.hash);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
