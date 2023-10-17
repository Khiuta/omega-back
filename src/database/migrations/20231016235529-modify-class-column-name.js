/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface) => queryInterface.renameColumn('characters', 'class', 'character_class'),

  down: (queryInterface) => queryInterface.renameColumn('characters', 'character-class', 'class'),
};
