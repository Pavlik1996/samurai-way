import { initializedSuccess } from "./app-reducer";
import { setAuthUserData } from "./auth-reducer";
import { sendMessageAC } from "./dialogs-reducer";
import { addPostAC, setUserProfile, setStatus } from "./profile-reducer";
import { acceptFollow, acceptUnFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toggleIsFollowing } from "./users-reducer";

export type DialogsType = {
  id: number;
  name: string;
};

export type MessagesType = {
  id: number;
  message: string;
};

export type PostsType = {
  id: number;
  messages: string;
  like: number;
};

export type ProfilePageType = {
  posts: PostsType[];
  newPostText: string;
  profile: ProfileInfoType;
  status: string;
};

export type ProfileInfoType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: null;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: string;
    github: string;
    mainLink: null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};

export type MessagesPageType = {
  messages: MessagesType[];
  dialogs: DialogsType[];
  newMessageBody: string;
};

export type ActionTypes =
  ReturnType<typeof setAuthUserData>
  | ReturnType<typeof sendMessageAC>
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof acceptFollow>
  | ReturnType<typeof acceptUnFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof toggleIsFollowing>
  | ReturnType<typeof initializedSuccess>
