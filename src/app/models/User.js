const Sequelize = require("sequelize");
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 5);
      }
    });

    return this;
  }

  static associate(models) {
    this.hasMany(models.Activity);
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  generateAuthToken() {
    return jwt.sign(
      {
        id: this.id
      },
      "73f304ed16b64d9cf22c9404283dc5ac",
      {
        expiresIn: "7d"
      }
    );
  }
}

module.exports = User;
