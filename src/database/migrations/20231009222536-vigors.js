/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('vigors', {
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
    fortitude_training: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: '',
    },
    fortitude_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    fortitude_others: {
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

  down: (queryInterface) => queryInterface.dropTable('vigors'),
};
