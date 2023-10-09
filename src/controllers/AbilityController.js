import Ability from '../models/Ability';

class AbilityController {
  async store(req, res) {
    try {
      const newAbility = Ability.create(req.body);
      return res.status(200).json(newAbility);
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
        name,
        cost,
        description,
        character_id,
      } = req.body;

      const ability = await Ability.update({
        name,
        cost,
        description,
      }, {
        where: {
          character_id,
          id: req.params.id,
        },
      });

      return res.status(200).json(ability);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new AbilityController();
