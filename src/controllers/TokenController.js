import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import Character from '../models/Character';
import Attack from '../models/Attack';
import Ability from '../models/Ability';
import Item from '../models/Item';
import Strength from '../models/Strength';
import Intelect from '../models/Intelect';
import Presence from '../models/Presence';
import Vigor from '../models/Vigor';
import Agility from '../models/Agility';

class TokenController {
  async store(req, res) {
    const { name = '', player = '', password = '' } = req.body;

    if (!name || !player || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas.'],
      });
    }

    const user = await Character.findOne({
      where: {
        name,
      },
      include: [Attack, Ability, Item, Strength, Intelect, Presence, Vigor, Agility],
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Personagem inexistente.'],
      });
    }

    const check = await bcryptjs.compare(password, user.password_hash);

    if (!check) {
      return res.status(401).json({
        errors: ['Senha incorreta.'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, name, player }, process.env.TOKEN_SECRET, {
      expiresIn: '6h',
    });

    return res.json({ user, token });
  }
}

export default new TokenController();
