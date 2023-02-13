import axios from "axios";
import { ProfileInfoType, UserPageType } from "../redux/store";

type PostDeleteType = {
  resultCode: number;
  messages: string[];
  data: {};
};

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "cee82169-26b4-4379-a726-b50e84b834c9",
  },
});

export const userAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<UserPageType>(`users?page=${currentPage}& count=${pageSize}`)
      .then((r) => r.data);
  },
};

export const followAPI = {
  follow(id: number) {
    return instance
      .get<PostDeleteType>(`follow/${id}`)
      .then((r) => r.data.resultCode);
  },
};

export const unFollowAPI = {
  unFollow(id: number) {
    return instance
      .get<PostDeleteType>(`follow/${id}`)
      .then((r) => r.data.resultCode);
  },
};

export const meAPI = {
  getMe(userID: string) {
    return instance
      .get<ProfileInfoType>(`profile/${userID}`)
      .then((r) => r.data);
  },
};
