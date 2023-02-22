import axios from "axios";
import { type } from "os";
import { ProfileInfoType } from "../redux/store";
import { UsersType } from "../redux/users-reducer";

type PostDeleteType = {
  resultCode: number;
  messages: string[];
  data: {};
};

type UpdateStatus = {
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
};

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get<ProfileInfoType>(`profile/${userId}`);
  },
  getStatus(userId: string) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus(newStatus: string) {
    return instance.put<UpdateStatus>(`/profile/status`, {
      status: newStatus,
    });
  },
};

export const authAPI = {
  me() {
    return instance.get<AuthType>("auth/me");
  },
};
