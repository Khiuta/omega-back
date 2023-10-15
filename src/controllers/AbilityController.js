import Ability from '../models/Ability';
import Character from '../models/Character';

class AbilityController {
  async index(req, res) {
    const abilities = await Ability.findAll({
      where: {
        character_id: req.params.id,
      },
      order: [['id', 'ASC']],
    }, {
      include: Character,
    });
    return res.status(200).json(abilities);
  }

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
      let {
        name,
        cost,
        description,
      } = req.body;
      const { character_id } = req.body;

      const search = await Ability.findOne({ where: { id: req.params.id } });

      if (name === '') name = search.name;
      if (cost === '') cost = search.cost;
      if (description === '') description = search.description;

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
