import Sequelize, { Model } from 'sequelize';
import Character from './Character';

export default class Intelect extends Model {
  static init(sequelize) {
    super.init({
      value: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      science_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      science_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      science_others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      investigation_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      investigation_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      investigation_others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      medicine_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      medicine_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      medicine_others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      profession_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      profession_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      profession_others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      survival_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      survival_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      survival_others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      tactics_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      tactics_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      tactics_others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      tech_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      tech_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      tech_others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      character_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        references: {
          model: Character,
          key: 'id',
        },
      },
    }, {
      sequelize,
      tableName: 'intelects',
    });
    return this;
  }
}
