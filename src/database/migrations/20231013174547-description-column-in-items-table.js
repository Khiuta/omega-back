/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('items', 'description', {
    type: Sequelize.TEXT,
    allowNull: true,
    defaultValue: '',
  }),

  down: (queryInterface) => queryInterface.removeColumn('items', 'description'),
};
