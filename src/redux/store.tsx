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
