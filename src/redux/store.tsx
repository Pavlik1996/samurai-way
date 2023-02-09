export type DialogsType = {
    id: number, name: string
}

export type MessagesType = {
    id: number, message: string
}

export type PostsType = {
    id: number, messages: string, like: number
}

export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string
    profile: ProfileInfoType
}

export type ProfileInfoType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export type MessagesPageType = {
    messages: MessagesType[],
    dialogs: DialogsType[],
    newMessageBody: string
}

export type UserPageType = {
    items: UsersType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    // error: null
    isFetching: boolean
}

export type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: null,
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: boolean
}





