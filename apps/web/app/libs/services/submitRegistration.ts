import axios, { AxiosError } from "axios";
import { RegistrationType } from "../schema/registration";

export const submitRegistration = async (data: RegistrationType) => {
  return await axios
    .post("/api/registration", {
      data,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((resp) => resp.data)
    .catch((err) => {
      if (err instanceof AxiosError) {
        throw err.response?.data;
      } else {
        throw err;
      }
    });
};
