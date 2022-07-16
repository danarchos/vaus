import { makeAutoObservable, runInAction, toJS } from "mobx";
import { Store } from "../store";
// import jwt_decode from "jwt-decode";
// import { User } from "../../types";

export default class AuthStore {
  private _store: Store;

  // currentUser: User | null = null;

  constructor(store: Store) {
    makeAutoObservable(this, {}, { deep: false, autoBind: true });

    this._store = store;
  }

  /**
   * Signup User
   */
  async signUp(email: string, username: string, password: string) {
    // try {
    //   const data = await this._store.api.authAPI.signUp(
    //     email,
    //     username,
    //     password
    //   );
    //   if (data?.data) this.setUser(data.data.token);
    // } catch (err) {
    //   console.log("Error signing up user", username);
    // }
  }

  /**
   * Login User
   */
  async login(email: string, password: string) {
    // try {
    //   const data = await this._store.api.authAPI.login(email, password);
    //   if (data?.data) this.setUser(data.data.token);
    // } catch (err) {
    //   console.log("Error logging in user", email);
    // }
  }

  setUser(token: string) {
    // if (token) {
    //   const { userId, username, walletId, recieveKey } = jwt_decode(
    //     token
    //   ) as any;
    //   this.currentUser = {
    //     userId,
    //     username,
    //     walletId,
    //     recieveKey,
    //     token,
    //   };
    // }
  }
}
