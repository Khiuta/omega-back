import Presence from '../models/Presence';

class PresenceController {
  async store(req, res) {
    try {
      const newPresence = await Presence.create(req.body);
      return res.status(200).json(newPresence);
    } catch (e) {
      return console.log(e);
    }
  }

  async update(req, res) {
    try {
      const {
        value,
        taming_training,
        taming_bonus,
        taming_others,
        diplomacy_training,
        diplomacy_bonus,
        diplomacy_others,
        tricking_training,
        tricking_bonus,
        tricking_others,
        intimidation_training,
        intimidation_bonus,
        intimidation_others,
        intuition_training,
        intuition_bonus,
        intuition_others,
        sight_training,
        sight_bonus,
        sight_others,
        religion_training,
        religion_bonus,
        religion_others,
        will_training,
        will_bonus,
        will_others,
        character_id,
      } = req.body;
      const presence = await Presence.update({
        value,
        taming_training,
        taming_bonus,
        taming_others,
        diplomacy_training,
        diplomacy_bonus,
        diplomacy_others,
        tricking_training,
        tricking_bonus,
        tricking_others,
        intimidation_training,
        intimidation_bonus,
        intimidation_others,
        intuition_training,
        intuition_bonus,
        intuition_others,
        sight_training,
        sight_bonus,
        sight_others,
        religion_training,
        religion_bonus,
        religion_others,
        will_training,
        will_bonus,
        will_others,
      }, {
        where: {
          character_id,
          id: req.params.id,
        },
      });
      return res.status(200).json(presence);
    } catch (e) {
      return console.log(e);
    }
  }
}

export default new PresenceController();
