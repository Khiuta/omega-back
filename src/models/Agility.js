import Sequelize, { Model } from 'sequelize';
import Character from './Character';

export default class Agility extends Model {
  static init(sequelize) {
    super.init({
      value: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
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
          model: Character,
          key: 'id',
        },
      },
    }, {
      sequelize,
      tableName: 'agilities',
    });
    return this;
  }
}
