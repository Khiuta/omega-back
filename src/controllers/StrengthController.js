import Strength from '../models/Strength';
import Character from '../models/Character';

class StrengthController {
  async index(req, res) {
    const strengths = await Strength.findAll({
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
      const newStrength = await Strength.create(req.body);
      return res.status(200).json(newStrength);
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
      const {
        character_id,
        value,
        athleticism_training,
        athleticism_bonus,
        athleticism_others,
        fighting_training,
        fighting_bonus,
        fighting_others,
      } = req.body;
      const str = await Strength.update({
        value,
        athleticism_training,
        athleticism_bonus,
        athleticism_others,
        fighting_training,
        fighting_bonus,
        fighting_others,
      }, {
        where: {
          character_id,
          id: req.params.id,
        },
      });
      return res.status(200).json(str);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new StrengthController();
