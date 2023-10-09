/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('intelects', {
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
    science_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    science_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    science_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    investigation_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    investigation_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    investigation_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    medicine_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    medicine_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    medicine_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    profession_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    profession_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    profession_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    survival_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    survival_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    survival_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    tactics_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tactics_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    tactics_others: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    tech_training: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tech_bonus: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    tech_others: {
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

  down: (queryInterface) => queryInterface.dropTable('intelects'),
};
