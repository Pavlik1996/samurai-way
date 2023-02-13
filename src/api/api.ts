import axios from "axios";
import { UserPageType } from "../redux/store";

export const getUsers = (currentPage: number, pageSize: number) => {
  return axios.get<UserPageType>(
    `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}& count=${pageSize}`,
    { withCredentials: true }
  );
};
