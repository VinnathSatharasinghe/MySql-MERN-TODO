const { DataTypes } = require('sequelize');
const { sequelize } = require('./database'); // Assuming you have a sequelize instance configured

const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: true, // Adjust as needed
  },
});

// Assuming you have a User model defined
const User = require('./user');

Todo.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = Todo;