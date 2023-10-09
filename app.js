import dotenv from 'dotenv';

dotenv.config();
import './src/database';
import express from 'express';

import characterRoutes from './src/routes/characterRoutes';
import attackRoutes from './src/routes/attackRoutes';
import abilityRoutes from './src/routes/abilityRoutes';
import itemRoutes from './src/routes/itemRoutes';
import strengthRoutes from './src/routes/strengthRoutes';
import intelectRoutes from './src/routes/intelectRoutes';
import presenceRoutes from './src/routes/presenceRoutes';
import vigorRoutes from './src/routes/vigorRoutes';
import agilityRoutes from './src/routes/agilityRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/character', characterRoutes);
    this.app.use('/attack', attackRoutes);
    this.app.use('/ability', abilityRoutes);
    this.app.use('/item', itemRoutes);
    this.app.use('/strength', strengthRoutes);
    this.app.use('/intelect', intelectRoutes);
    this.app.use('/presence', presenceRoutes);
    this.app.use('/vigor', vigorRoutes);
    this.app.use('/agility', agilityRoutes);
  }
}

export default new App().app;
