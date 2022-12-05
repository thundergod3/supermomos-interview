import pkg from "sequelize";
import yt from "yt-getvideos";

import SocialsModel from "../models/socials.model.js";

// [GET]
export const getSocialDetail = async (req, res) => {
  const { id } = req.params;

  const findSocial = await SocialsModel.findOne({
    where: {
      id,
    },
  });

  res.status(200).json(findSocial);
};

// [POST]
export const createSocial = async (req, res) => {
  const {
    title,
    venue,
    capacity,
    price,
    description,
    isManualApprove,
    privacy,
    tags,
    banner,
    startAt,
  } = req.body;

  if (title === undefined) {
    res.status(400);
    throw new Error("Title is a require field. Please try again");
  }

  if (venue === undefined) {
    res.status(400);
    throw new Error("Venue is a require field. Please try again");
  }

  if (capacity === undefined) {
    res.status(400);
    throw new Error("Capacity is a require field. Please try again");
  }

  if (price === undefined) {
    res.status(400);
    throw new Error("Price is a require field. Please try again");
  }

  if (description === undefined) {
    res.status(400);
    throw new Error("Description is a require field. Please try again");
  }

  if (privacy === undefined) {
    res.status(400);
    throw new Error("Privacy is a require field. Please try again");
  }

  if (tags === undefined || tags?.length === 0) {
    res.status(400);
    throw new Error("Tags is a require field. Please try again");
  }

  if (banner === undefined) {
    res.status(400);
    throw new Error("Banner is a require field. Please try again");
  }

  if (startAt === undefined) {
    res.status(400);
    throw new Error("StartAt is a require field. Please try again");
  }

  const newMovie = await SocialsModel.create({
    title,
    venue,
    capacity: Number(capacity),
    price: Number(price),
    description,
    isManualApprove,
    privacy,
    tags,
    banner,
    startAt,
  });

  res.status(200).json(newMovie);
};
