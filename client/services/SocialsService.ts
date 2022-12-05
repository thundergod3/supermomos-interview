import HTTPMethod from "./index";

class SocialsService {
  // [GET]
  getSocialDetail = (id: string) => HTTPMethod.get(`/socials/${id}`);

  // [POST]
  createSocial = (data: any) => HTTPMethod.post("/socials", data);
}

export default new SocialsService();
