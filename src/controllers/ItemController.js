import Item from '../models/Item';
import Character from '../models/Character';

class ItemController {
  async index(req, res) {
    const items = await Item.findAll({
      where: {
        character_id: req.params.id,
      },
      order: [['id', 'ASC']],
    }, {
      include: Character,
    });
    return res.status(200).json(items);
  }

  async store(req, res) {
    try {
      const newItem = await Item.create(req.body);
      return res.status(200).json(newItem);
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
        slots,
        description,
      } = req.body;
      const { character_id } = req.body;

      const search = await Item.findOne({ where: { id: req.params.id } });

      if (name === '') name = search.name;
      if (slots === '') slots = search.slots;
      if (description === '') description = search.description;

      const item = await Item.update({
        name,
        slots,
        description,
      }, {
        where: {
          character_id,
          id: req.params.id,
        },
      });

      return res.status(200).json(item);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new ItemController();
