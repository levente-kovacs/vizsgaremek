const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const softDelete = require('mongoose-delete');
// const idvalidator = require('mongoose-id-validator');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
  password: { type: String, required: true, bcrypt: true },
  active: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    default: 1
  },
  accessToken: {
    type: String,
    required: false
  },
},
{
  timestamps: true,
});

// UserSchema.pre('save', function userSchemaPreSave(next) {
//   let rounds = parseInt(process.env.SALT_WORK_FACTOR || 10, 10);
//   if (Number.isNaN(rounds)) rounds = 10;

//   const user = this;
//   if (!user.isModified('password')) return next();

//   // eslint-disable-next-line consistent-return
//   bcrypt.genSalt(rounds, (err, salt) => {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, (hashErr, hash) => {
//       if (hashErr) return next(err);

//       user.password = hash;
//       return next();
//     });
//   });
// });

// UserSchema.methods.comparePassword = function userSchemaPreSaveComparePass(candidatePassword) {
//   const validatorFunc = (resolve, reject) => {
//     bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//       if (err) reject(err);
//       resolve(isMatch);
//     });
//   };
//   return new Promise(validatorFunc);
// };

// // userSchema.plugin(softDelete, { deletedAt: true, deletedBy: true });
// UserSchema.plugin(idvalidator);

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);