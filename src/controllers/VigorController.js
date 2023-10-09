import Vigor from '../models/Vigor';

class VigorController {
  async store(req, res) {
    try {
      const newVigor = await Vigor.create(req.body);
      return res.status(200).json(newVigor);
    } catch (e) {
      return console.log(e);
    }
  }

  async update(req, res) {
    try {
      const {
        value,
        fortitude_training,
        fortitude_bonus,
        fortitude_others,
        character_id,
      } = req.body;
      const vigor = await Vigor.update({
        value,
        fortitude_training,
        fortitude_bonus,
        fortitude_others,
        character_id,
      }, {
        where: {
          character_id,
          id: req.params.id,
        },
      });
      return res.status(200).json(vigor);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new VigorController();
