/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('characters', 'current_pe', {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0,
  }),

  down: (queryInterface) => queryInterface.removeColumn('characters', 'current_pe'),
};
