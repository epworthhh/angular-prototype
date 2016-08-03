'use strict';

var Schema = {

  users: {
    user_id : {
      type: 'increments',
      primary: true,
      nullable: false
    },
    username:  {
      type: 'string',
      nullable: false
    },
    name:  {
      type:  'string',
      nullable: false
    },
    last_name: {
      type: 'string'
    },
    last_update: {
      type: 'string'
    },
    password: {
      type: 'string',
      nullable: false
    },
    picture: {
      type: 'string',
      defaultTo: '/defaultPic.jpg'
    },
    email: {
      type: 'string',
      nullable: false,
      maxlength: 254,
      unique: true
    },
    phone: {
      type: 'integer'
    },
    place: {
      type: 'string'
    },
    description:  {
      type: 'string'
    },
    key_code:  {
      type: 'string'
    },
    create_date:  {
      type: 'timestamp',
      nullable: false
    },
    sex:   {
      type: 'string'
    },
    age: {
      type: 'integer'
    },
    points: {
      type: 'integer'
    },
    user_lat: {
      type: 'integer',
      nullable: false
    },
    user_long: {
      type: 'integer',
      nullable: false
    },
    ROL_rol_id: {
      type: 'integer'
    },
    company_name: {
      type: 'string'
    },
    company_address: {
      type: 'string'
    },
    company_web: {
      type: 'string'
    },
    org_name: {
      type: 'string'
    },
    org_address: {
      type: 'string'
    },
    org_web: {
      type: 'string'
    }/*
    buttons: function () {
      return this.hasMany(buttons)
    })
  }*/
  },

  buttons: {
    button_id : {
      type: 'increments',
      primary: true,
      nullable: false
    },
    button_type:  {
      type: 'string',
      nullable: false
    },
    meeting_date:   {
      type: 'timestamp'
    },
    last_update:   {
      type: 'timestamp'
    },
    place: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    key_code: {
      type: 'string'
    },
    create_date:   {
      type: 'timestamp',
      nullable: false
    },
    participants: {
      type: 'string'
    },
    button_lat:  {
      type: 'integer',
      nullable: false
    },
    button_long: {
      type: 'integer',
      nullable: false
    },
    user_owner: {
      type: 'integer'
    }/*
    user_owner: function () {
      return this.belongsTo(users)
    })
    }*/
  },
  causes: {
    cause_id : {
      type: 'increments',
      primary: true,
      nullable: false
    },
    cause_label:  {
      type: 'string',
      nullable: false
    },
    goal:  {
      type: 'float',
      nullable: false
    },
    needed_points:  {
      type: 'integer',
      nullable: false
    },
    data_bank: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    create_date: {
      type: 'timestamp'
    },
    end_date: {
      type: 'timestamp'
    },
    user_owner: {
      type: 'string'
    }
  }
};

module.exports = Schema;
