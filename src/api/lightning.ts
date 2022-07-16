import axios from "axios";
import { GenerateTipInvoiceProps } from "../types";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default class LightningAPI {
  private api: any;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_LIGHTNING_API_BASE_URL,
      headers: defaultHeaders,
    });
  }

  async getEventsSocket(id: string) {
    return new WebSocket(
      `${process.env.REACT_APP_LIGHTNING_WS_BASE_URL}/?invoiceId=${id}`
    );
  }

  generateInvoice = async (
    amount: number,
    {
      tipperUserId,
      destinationWalletId,
      recieverUserId,
      videoId,
      videoTime,
    }: GenerateTipInvoiceProps
  ) => {
    console.log({
      tipperUserId,
      destinationWalletId,
      recieverUserId,
      videoId,
      videoTime,
    });
    try {
      const data = await this.api.get(
        `/invoice?amount=${amount}&destinationWalletId=${destinationWalletId}&tipperUserId=${tipperUserId}&recieverUserId=${recieverUserId}&videoId=${videoId}&videoTime=${videoTime}`
      );
      return data?.data?.invoice;
    } catch (err) {
      console.log({ err });
    }
  };
}
