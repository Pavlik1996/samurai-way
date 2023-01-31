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

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT", newText: newText
    } as const
}

export const newMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_BODY", bodyText: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: "SEND_MESSAGE"
    } as const
}

export const followAC = (id: number) => {
    return {
        type: "FOLLOW",
        payload: {id}
    } as const
}

export const unFollowAC = (id: number) => {
    return {
        type: "UN-FOLLOW",
        payload: {id}
    } as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
}






