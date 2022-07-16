import axios from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default class VideoAPI {
  private api: any;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_VIDEO_API_BASE_URL,
      headers: defaultHeaders,
    });
  }

  likeVideo = async (videoId: string, userId: string, token: string) => {
    const result = await this.api.post(
      "/like",
      { userId, videoId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return result;
  };

  dislikeVideo = async (videoId: string, userId: string, token: string) => {
    const result = await this.api.post(
      "/dislike",
      { userId, videoId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return result;
  };

  commentVideo = async (
    comment: string,
    videoId: string,
    userId: string,
    token: string
  ) => {
    const result = await this.api.post(
      `/comment`,
      {
        comment,
        userId,
        videoId,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return result;
  };

  upvoteComment = async (
    commentId: string,
    videoId: string,
    userId: string,
    token: string
  ) => {
    console.log("and here");
    const result = await this.api.post(
      `/comment-upvote`,
      {
        commentId,
        userId,
        videoId,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return result;
  };

  getVideoById = async (id: string, userId?: string) => {
    const endpoint = userId
      ? `/video?id=${id}&userId=${userId}`
      : `/video?id=${id}}`;
    const result = await this.api.get(endpoint);
    return result;
  };

  getVideosByUserId = async (userId: string) => {
    const result = await this.api.get(`/videosByUser?userId=${userId}`);
    return result;
  };
}
