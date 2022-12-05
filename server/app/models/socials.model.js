import { Sequelize } from "sequelize";

import sequelize from "../configs/sequelize.js";

const SocialsModel = sequelize.define("socials", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  title: { type: Sequelize.STRING, allowNull: false },
  venue: { type: Sequelize.STRING, allowNull: false },
  capacity: { type: Sequelize.INTEGER, allowNull: false },
  price: { type: Sequelize.INTEGER, allowNull: false },
  description: { type: Sequelize.STRING, allowNull: false },
  isManualApprove: { type: Sequelize.BOOLEAN, allowNull: false },
  privacy: { type: Sequelize.STRING, allowNull: false },
  tags: { type: Sequelize.JSONB, allowNull: false, defaultValue: [] },
  banner: { type: Sequelize.STRING, allowNull: false },
  startAt: { type: Sequelize.DATE, allowNull: false },
});

export default SocialsModel;
