import Item from '../models/Item';

class ItemController {
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
      const {
        name,
        slots,
        character_id,
      } = req.body;

      const item = await Item.update({
        name,
        slots,
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
