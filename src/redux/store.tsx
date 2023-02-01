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
    users: UsersType[]
}

export type UsersType = {
    id: number,
    followed: boolean,
    photoUrl: string,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}





