import socialsRoute from "./socials.route.js";

const routes = (express) => {
  express.use("/socials", socialsRoute);
};

export default routes;
