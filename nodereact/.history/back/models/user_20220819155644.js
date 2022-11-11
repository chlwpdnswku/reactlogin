const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// 모델: 스키마를감싸줌
// 스키마 : 상품의 이름의 정보와 타입을 적어줌
const userSchema = mongoose.Schema({
  name: { type: String, maxlength: 50 },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  tokon: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

//몽구스메서드
// usermodle에 유저정보를 저장하기전에 함수를주고 다끝나면다시 save로넘어간다.
// next를 하면은 index안에있는 next로 들어와버림!
userSchema.pro('save', function (next) {
  // user table가져오기
  var user = this;

  // 비밀번호 암호화 시키기
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    bcrypt();
  });

  next();
});

// 스키마를 모델로감싸준다
const User = mongoose.model('User', userSchema);

module.exports = { User };