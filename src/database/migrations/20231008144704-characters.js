/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('characters', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    player: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    origin: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    class: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    level: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    movement: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    max_pv: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    current_pv: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    max_san: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    current_san: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    defense: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    equipments: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    others: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    protection: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    resistence: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('characters'),
};
