import axios from "axios";
import { ProfileInfoType } from "../redux/store";
import { UsersType } from "../redux/users-reducer";

type PostDeleteType = {
  resultCode: number;
  messages: string[];
  data: {};
};

type AuthType = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  messages: [string];
  fieldsErrors: [];
  resultCode: number;
};

type getUsersType = {
  items: UsersType[];
  totalCount: number;
  error: null;
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
    return instance.get<getUsersType>(
      `users?page=${currentPage}& count=${pageSize}`
    );
  },
  follow(id: number) {
    return instance.post<PostDeleteType>(`follow/${id}`);
  },
  unFollow(id: number) {
    return instance.delete<PostDeleteType>(`follow/${id}`);
  },
  getProfile(userID: string) {
    return instance.get<ProfileInfoType>(`profile/${userID}`);
  },
};

export const authAPI = {
  me() {
    return instance.get<AuthType>("auth/me");
  },
};
