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

  async update(req, res) {
    try {
      let {
        origin,
        character_class,
        level,
        movement,
        max_pv,
        max_san,
        max_pe,
        current_pv,
        current_san,
        current_pe,
        defense,
        protection,
        resistence,
        equipments,
        others,
      } = req.body;

      const search = await Character.findOne({ where: { id: req.params.id } });

      if (origin === '') origin = search.origin;
      if (character_class === '') character_class = search.character_class;
      if (level === '') level = search.level;
      if (movement === '') movement = search.movement;
      if (max_pv === '') max_pv = search.max_pv;
      if (max_san === '') max_san = search.max_san;
      if (max_pe === '') max_pe = search.max_pe;
      if (current_pv === '') current_pv = search.current_pv;
      if (current_san === '') current_san = search.current_san;
      if (current_pe === '') current_pe = search.current_pe;
      if (defense === '') defense = search.defense;
      if (protection === '') protection = search.protection;
      if (resistence === '') resistence = search.resistence;
      if (equipments === '') equipments = search.equipments;
      if (others === '') others = search.others;

      const character = await Character.update({
        origin,
        character_class,
        level,
        movement,
        max_pv,
        max_san,
        max_pe,
        current_pv,
        current_san,
        current_pe,
        defense,
        protection,
        resistence,
        equipments,
        others,
      }, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json(character);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new CharacterController();
