import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Character extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Insira o nome do personagem',
          },
        },
      },
      player: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Insira o nome do jogador',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 18],
            msg: 'A senha deve conter de 6 a 18 caracteres',
          },
        },
      },
      origin: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      class: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      movement: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      max_pv: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      current_pv: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      max_san: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      current_san: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      max_pe: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      current_pe: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      defense: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      equipments: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      others: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      protection: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      resistence: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
      tableName: 'characters',
    });

    this.addHook('beforeSave', async (char) => {
      char.password_hash = await bcryptjs.hash(char.password, 8);
    });

    return this;
  }
}
