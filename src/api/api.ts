import axios from "axios";
import {ProfileInfoType} from "../redux/store";
import {UsersType} from "../redux/users-reducer";
import {FormDataType} from "../components/Login/Login";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "cee82169-26b4-4379-a726-b50e84b834c9",
    },
});

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<getUsersType>(`users?page=${currentPage}& count=${pageSize}`);
    },
    follow(id: number) {
        return instance.post<ResponseType<{ resultCode: number }>>(`follow/${id}`);
    },
    unFollow(id: number) {
        return instance.delete<ResponseType<{ resultCode: number }>>(`follow/${id}`);
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
        return instance.put<ResponseType>(`/profile/status`, {
            status: status,
        });
    },
    savePhoto(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<ResponseType<ResponseDataPhoto>>('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    }
};

export const authAPI = {
    me() {
        return instance.get<ResponseType<ResponseDataMe>>("auth/me");
    },
    login(data: FormDataType) {
        return instance.post<ResponseType<{ userId: number }>>("/auth/login", data);
    },
    logOut() {
        return instance.delete<ResponseType>("/auth/login");
    },
};


type getUsersType = {
    items: UsersType[];
    totalCount: number;
    error: null;
};

export type ResponseType<D = {}> = {
    resultCode: number;
    messages: string[];
    data: D;
}

export enum ResultCode {
    OK = 0,
    CAPTCHA = 10
}

type ResponseDataMe = {
    id: number,
    email: string,
    login: string
}

type ResponseDataPhoto = {
    small: string,
    large: string
}