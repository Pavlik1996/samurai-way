import {ActionsType, UserPageType} from "./store";

const initialState: UserPageType = {
    users: []
}

export const usersReducer = (state: UserPageType = initialState, action: ActionsType): UserPageType => {
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


