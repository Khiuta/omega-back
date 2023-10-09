import Sequelize, { Model } from 'sequelize';
import Character from './Character';

export default class Ability extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cost: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      character_id: {
        type: Sequelize.STRING,
        defaultValue: null,
        references: {
          model: Character,
          key: 'id',
        },
      },
    }, {
      sequelize,
      tableName: 'abilities',
    });
    return this;
  }
}
