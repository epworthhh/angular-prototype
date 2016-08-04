/*
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Button = sequelize.define("Button", {
    button_id : {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    button_type:  {
      type: Sequelize.STRING,
        validate: {
        notNull: true            // won't allow null
      }
    },
    meeting_date: Sequelize.DATE,
    last_update: Sequelize.DATE,
    place: Sequelize.STRING,
    description: Sequelize.STRING,
    key_code: Sequelize.STRING,
    create_date: Sequelize.DATE,
    participants: Sequelize.STRING,
    button_lat:  {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { min: -90, max: 90 }
    },
    button_long: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: { min: -180, max: 180 }
    },
    user_owner: Sequelize.STRING
  });
  return Button;
};
*/
