import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Character from '../models/Character';
import Attack from '../models/Attack';
import Ability from '../models/Ability';
import Item from '../models/Item';
import Strength from '../models/Strength';
import Intelect from '../models/Intelect';
import Presence from '../models/Presence';
import Vigor from '../models/Vigor';
import Agility from '../models/Agility';

const models = [Character, Attack, Ability, Item, Strength, Intelect, Presence, Vigor, Agility];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

// #region Associating
Character.hasMany(Attack);
Attack.belongsTo(Character);
Character.hasMany(Ability);
Ability.belongsTo(Character);
Character.hasMany(Item);
Item.belongsTo(Character);
Character.hasMany(Strength);
Strength.belongsTo(Character);
Character.hasMany(Intelect);
Intelect.belongsTo(Character);
Character.hasMany(Presence);
Presence.belongsTo(Character);
Character.hasMany(Vigor);
Vigor.belongsTo(Character);
Character.hasMany(Agility);
Agility.belongsTo(Character);
// #endregion Associating
