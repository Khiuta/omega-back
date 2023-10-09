/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('strengths', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    athleticism_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    athleticism_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    athleticism_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    fighting_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    fighting_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    fighting_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
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

  down: (queryInterface) => queryInterface.dropTable('strengths'),
};
