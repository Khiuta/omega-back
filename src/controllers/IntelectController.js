import Intelect from '../models/Intelect';

class IntelectController {
  async store(req, res) {
    try {
      const newIntelect = await Intelect.create(req.body);
      return res.status(200).json(newIntelect);
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
        value,
        science_training,
        science_bonus,
        sciente_others,
        investigation_training,
        investigation_bonus,
        investigation_others,
        medicine_training,
        medicine_bonus,
        medicine_others,
        profession_training,
        profession_bonus,
        profession_others,
        survival_training,
        survival_bonus,
        survival_others,
        tactics_training,
        tactics_bonus,
        tactics_others,
        tech_training,
        tech_bonus,
        tech_others,
        character_id,
      } = req.body;

      const intelect = await Intelect.update({
        value,
        science_training,
        science_bonus,
        sciente_others,
        investigation_training,
        investigation_bonus,
        investigation_others,
        medicine_training,
        medicine_bonus,
        medicine_others,
        profession_training,
        profession_bonus,
        profession_others,
        survival_training,
        survival_bonus,
        survival_others,
        tactics_training,
        tactics_bonus,
        tactics_others,
        tech_training,
        tech_bonus,
        tech_others,
      }, {
        where: {
          character_id,
          id: req.params.id,
        },
      });

      return res.status(200).json(intelect);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new IntelectController();
