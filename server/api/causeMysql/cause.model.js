/*
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Cause = sequelize.define("Cause", {
    cause_id : {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    cause_label:  {
      type: Sequelize.STRING,
        validate: {
        notNull: true            // won't allow null
      }
    },
    goal:  {
      type: Sequelize.FLOAT,
      validate: {
        notNull: true            // won't allow null
      }
    },
    needed_points:  {
      type: Sequelize.INTEGER,
      validate: {
        notNull: true            // won't allow null
      }
    },
    data_bank: Sequelize.STRING(45),
    description: Sequelize.STRING,
    create_date: Sequelize.DATE,
    end_date: Sequelize.DATE,
    user_owner: Sequelize.STRING
  });

  return Cause;
};
*/
