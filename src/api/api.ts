import axios from "axios";
import { ProfileInfoType } from "../redux/store";
import { UsersType } from "../redux/users-reducer";

type PostDeleteType = {
  resultCode: number;
  messages: string[];
  data: {};
};

type UpdateStatus = PostDeleteType;

type MeAuthType = {
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

type LoginPostAuthType = {
  resultCode: number;
  messages: [];
  data: {
    userId: number;
  };
};

type LoginDeleteAuthType = {
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
    return instance.get<string>(`/profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<UpdateStatus>(`/profile/status`, {
      status: status,
    });
  },
};

export const authAPI = {
  me() {
    return instance.get<MeAuthType>("auth/me");
  },
  login(email: string, password: string, rememberMe: boolean = false) {
    return instance.post<LoginPostAuthType>("/auth/login", {
      email,
      password,
      rememberMe,
    });
  },
  logOut() {
    return instance.delete<LoginDeleteAuthType>("/auth/login");
  },
};
