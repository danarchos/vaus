import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default class AuthAPI {
  private api: any;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_AUTH_API_BASE_URL,
      headers: defaultHeaders,
    });
  }

  signUp = async (email: string, username: string, password: string) => {
    try {
      const data = await this.api.post("/signUp", {
        email,
        username,
        password,
      });

      return data;
    } catch (err) {
      console.log({ err });
    }
  };

  login = async (email: string, password: string) => {
    try {
      const data = await this.api.post("/login", {
        email,
        password,
      });

      return data;
    } catch (err) {
      console.log({ err });
    }
  };
}
