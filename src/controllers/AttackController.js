import Attack from '../models/Attack';
import Character from '../models/Character';

class AttackController {
  async index(req, res) {
    const attacks = await Attack.findAll({
      where: {
        character_id: req.params.id,
      },
      order: [['id', 'ASC']],
    }, {
      include: Character,
    });
    return res.status(200).json(attacks);
  }

  async store(req, res) {
    try {
      const {
        name, test, damage, others, character_id,
      } = req.body;
      const newAttack = await Attack.create({
        name, test, damage, others, character_id,
      });
      return res.status(200).json(newAttack);
    } catch (e) {
      if (e.erros) {
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
        test,
        damage,
        others,
      } = req.body;
      const { character_id } = req.body;

      const search = await Attack.findOne({ where: { id: req.params.id } });

      if (name === '') name = search.name;
      if (test === '') test = search.test;
      if (damage === '') damage = search.damage;
      if (others === '') others = search.others;

      const attack = await Attack.update({
        name,
        test,
        damage,
        others,
      }, {
        where: {
          character_id,
          id: req.params.id,
        },
      });
      return res.status(200).json(attack);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new AttackController();
