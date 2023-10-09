import Sequelize, { Model } from 'sequelize';
import Character from './Character';

export default class Vigor extends Model {
  static init(sequelize) {
    super.init({
      value: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fortitude_training: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: '',
      },
      fortitude_bonus: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      fortitude_others: {
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
      tableName: 'vigors',
    });
    return this;
  }
}
