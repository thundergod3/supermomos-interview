import { Router } from "express";
import asyncHandler from "express-async-handler";

import {
  createSocial,
  getSocialDetail,
} from "../app/controllers/socials.controller.js";

const socialsRoute = Router();

// [GET]
socialsRoute.get("/:id", asyncHandler(getSocialDetail));

// [POST]
socialsRoute.post("/", asyncHandler(createSocial));

export default socialsRoute;
