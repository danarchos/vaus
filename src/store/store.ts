import { makeAutoObservable } from "mobx";
import { VideoAPI, AuthAPI, LightningAPI } from "../api";
import { PlayerStore, VideoStore, AuthStore, LightningStore } from "./stores";

export class Store {
  // Child Stores
  playerStore = new PlayerStore(this);
  videoStore = new VideoStore(this);
  authStore = new AuthStore(this);
  lightningStore = new LightningStore(this);

  // UI Logic state - all the state for all user interaction
  // discover = new DiscoverView(this);
  api: {
    videoAPI: VideoAPI;
    authAPI: AuthAPI;
    lightningAPI: LightningAPI;
  };

  constructor(
    videoAPI: VideoAPI,
    authAPI: AuthAPI,
    lightningAPI: LightningAPI
  ) {
    makeAutoObservable(this, {}, { deep: false, autoBind: true });
    this.api = { videoAPI, authAPI, lightningAPI };
  }
}

export const createStore = () => {
  const videoAPI = new VideoAPI();
  const authAPI = new AuthAPI();
  const lightningAPI = new LightningAPI();
  return new Store(videoAPI, authAPI, lightningAPI);
};
