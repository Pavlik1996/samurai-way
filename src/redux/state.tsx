export type DialogsType = {
    id: number, name: string
}
export type MessagesType = {
    id: number, message: string
}
export type PostsType = {
    id: number, messages: string, like: number
}

export type ProfilePageTpe = {
    posts: PostsType[],
    newPostText: string

}

export type MessagesPageType = {
    messages: MessagesType[],
    dialogs: DialogsType[],

}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageTpe,
    dialogsPage: MessagesPageType,
    sidebar: SidebarType

}

export type StoreType = {
    _state: RootStateType,
    changeNewText: (newText: string) => void,
    addPost: () => void,
    subscribe: (callback: () => void) => void,
    _onChange: () => void,
    getState: () => RootStateType
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
        },
        sidebar: {}
    },
    addPost() {
        const newPost: PostsType = {
            id: 6, messages: this._state.profilePage.newPostText, like: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._onChange()
    },

    _onChange() {
        console.log('state changed')
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    subscribe(callback) {
        this._onChange = callback   // наблюдетель, передаем функцию в другую функцию
    },
    getState() {
        return this._state
    }

}






