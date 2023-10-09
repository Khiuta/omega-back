import Attack from '../models/Attack';
import Character from '../models/Character';
import Ability from '../models/Ability';
import Item from '../models/Item';
import Strength from '../models/Strength';
import Intelect from '../models/Intelect';
import Presence from '../models/Presence';
import Vigor from '../models/Vigor';
import Agility from '../models/Agility';

class CharacterController {
  async index(req, res) {
    const characters = await Character.findAll({
      include: [Attack, Ability, Item, Strength, Intelect, Presence, Vigor, Agility],
    });
    return res.status(200).json(characters);
  }

  async store(req, res) {
    try {
      const newChar = await Character.create(req.body);
      return res.status(200).json(newChar);
    } catch (e) {
      if (e.errors) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
      return console.log(e);
    }
  }
}

export default new CharacterController();
