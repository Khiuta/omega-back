import Agility from '../models/Agility';
import Character from '../models/Character';

class AgilityController {
  async index(req, res) {
    const strengths = await Agility.findAll({
      where: {
        character_id: req.params.id,
      },
    }, {
      include: Character,
    });
    return res.status(200).json(strengths);
  }

  async store(req, res) {
    try {
      const newAgility = await Agility.create(req.body);
      return res.status(200).json(newAgility);
    } catch (e) {
      return console.log(e);
    }
  }

  async update(req, res) {
    try {
      const {
        value,
        acrobacy_training,
        acrobacy_bonus,
        acrobacy_others,
        crime_training,
        crime_bonus,
        crime_others,
        stealth_training,
        stealth_bonus,
        stealth_others,
        iniciative_training,
        iniciative_bonus,
        iniciative_others,
        driving_training,
        driving_bonus,
        driving_others,
        aiming_training,
        aiming_bonus,
        aiming_others,
        reflexes_training,
        reflexes_bonus,
        reflexes_others,
        character_id,
      } = req.body;

      const agility = await Agility.update({
        value,
        acrobacy_training,
        acrobacy_bonus,
        acrobacy_others,
        crime_training,
        crime_bonus,
        crime_others,
        stealth_training,
        stealth_bonus,
        stealth_others,
        iniciative_training,
        iniciative_bonus,
        iniciative_others,
        driving_training,
        driving_bonus,
        driving_others,
        aiming_training,
        aiming_bonus,
        aiming_others,
        reflexes_training,
        reflexes_bonus,
        reflexes_others,
      }, {
        where: {
          character_id,
          id: req.params.id,
        },
      });
      return res.status(200).json(agility);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new AgilityController();
