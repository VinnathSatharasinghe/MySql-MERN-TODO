const { DataTypes } = require('sequelize');
const { sequelize } = require('./todo'); // Assuming you have a sequelize instance configured

const User = sequelize.define('User', {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Assuming you have a Task model defined
const Task = require('./todo');

User.hasMany(Task, { foreignKey: 'userId', as: 'list' });

module.exports = User;