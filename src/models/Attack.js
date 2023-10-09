import Sequelize, { Model } from 'sequelize';
import Character from './Character';

export default class Attack extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      test: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      damage: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      others: {
        type: Sequelize.STRING,
        defaultValue: '',
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
      tableName: 'attacks',
    });

    return this;
  }
}
