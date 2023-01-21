import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

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
type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: MessagesPageType,
    sidebar: SidebarType

}

export type StoreType = {
    _state: RootStateType,
    subscribe: (callback: () => void) => void,
    _onChange: () => void,
    getState: () => RootStateType,
    dispatch: (action: ActionsType) => void
}


export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST", postText: postText
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


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'Вiтаю', like: 88},
                {id: 2, messages: 'Добры настрой !', like: 88},
                {id: 3, messages: 'П\'ю гарбату з лімонам і мятай.', like: 88},
                {id: 4, messages: 'Збіраюся выйсці на праменад', like: 88},
                {id: 5, messages: 'На вуліцы марозна!', like: 88},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Zhenya'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Masha'},
                {id: 5, name: 'Kot'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'You'},
                {id: 3, message: 'Are'},
                {id: 4, message: 'Allo'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._onChange = callback   // наблюдетель, передаем функцию в другую функцию
    },
    getState() {
        return this._state
    },
    dispatch(action) {// описывает действие которые нужно совершить
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        this._onChange()
    },
}







