export type initialStateAuthType = {
    data: {
        id: number,
        login: string,
        email: string
    },
    resultCode: number,
    isAuth: boolean
}

const initialState: initialStateAuthType = {} as initialStateAuthType

export const AuthReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

type AuthActionsType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: 'SET-USER-DATA',
        payload: {id, login, email}
    } as const
}