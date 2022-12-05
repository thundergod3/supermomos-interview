"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('socials', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable("socials", {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('socials');
     */
    await queryInterface.dropTable("socials");
  },
};
