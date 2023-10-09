/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('agilities', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    acrobacy_training: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    acrobacy_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    acrobacy_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    crime_training: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    crime_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    crime_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    stealth_training: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    stealth_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    stealth_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    iniciative_training: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    iniciative_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    iniciative_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    driving_training: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    driving_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    driving_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    aiming_training: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    aiming_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    aiming_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    reflexes_training: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    reflexes_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    reflexes_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    character_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'characters',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('agilities'),
};
