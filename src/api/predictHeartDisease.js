import * as Api from "axios";

const url = "https://n57j0h4ao4.execute-api.ap-southeast-2.amazonaws.com/test/heart-disease";

export const predictHeartDisease = async (req) => {
  console.log(req)
    return await Api.post(url, req)
  };