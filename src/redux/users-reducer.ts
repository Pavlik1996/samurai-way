import {UserPageType, UsersType} from "./store";

const initialState: UserPageType = {
    users: []
}

export const usersReducer = (state: UserPageType = initialState, action: ActionsTypeUsers): UserPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.payload.id ? {...el, followed: true} : el)}
        }
        case "UN-FOLLOW": {
            return {...state, users: state.users.map(el => el.id === action.payload.id ? {...el, followed: false} : el)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default:
            return state
    }
}

export type ActionsTypeUsers = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>


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




