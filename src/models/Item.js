import Sequelize, { Model } from 'sequelize';
import Character from './Character';

export default class Item extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      slots: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      character_id: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        references: {
          model: Character,
          key: 'id',
        },
      },
    }, {
      sequelize,
      tableName: 'items',
    });
    return this;
  }
}
