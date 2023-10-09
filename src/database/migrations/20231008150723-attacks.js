/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('attacks', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    test: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    damage: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    others: {
      type: Sequelize.STRING,
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

  down: (queryInterface) => queryInterface.dropTable('attacks'),
};
