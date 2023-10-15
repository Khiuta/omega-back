import Sequelize, { Model } from 'sequelize';
import Character from './Character';

export default class Presence extends Model {
  static init(sequelize) {
    super.init({
      value: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      taming_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      taming_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      taming_others: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      diplomacy_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      diplomacy_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      diplomacy_others: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      tricking_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      tricking_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      tricking_others: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      intimidation_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      intimidation_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      intimidation_others: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      intuition_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      intuition_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      intuition_others: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      sight_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      sight_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      sight_others: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      religion_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      religion_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      religion_others: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      will_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      will_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      will_others: {
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
      tableName: 'presences',
    });
    return this;
  }
}
