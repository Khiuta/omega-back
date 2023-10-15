import Sequelize, { Model } from 'sequelize';
import Character from './Character';

export default class Strength extends Model {
  static init(sequelize) {
    super.init({
      value: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      athleticism_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      athleticism_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      athleticism_others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      fighting_training: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      fighting_bonus: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      fighting_others: {
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
      tableName: 'strengths',
    });
    return this;
  }
}
