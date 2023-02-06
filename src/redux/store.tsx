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
    error: null
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





