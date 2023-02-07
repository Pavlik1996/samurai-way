import {UserPageType, UsersType} from "./store";

const initialState: UserPageType = {
    items: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    error: null
}

export const usersReducer = (state: UserPageType = initialState, action: ActionsTypeUsers): UserPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, items: state.items.map(el => el.id === action.payload.id ? {...el, followed: true} : el)}
        }
        case "UN-FOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.payload.id ? {...el, followed: false} : el)}
        }
        case "SET-USERS": {
            return {...state, items: action.payload.users}
        }
        case "SET-CURRENT-PAGES": {
            return {...state, currentPage: action.payload.page}
        }
        case "SET-USERS-TOTAL-COUNT": {
            return {...state, totalCount: action.payload.totalCount}
        }
        default:
            return state
    }
}

export type ActionsTypeUsers =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

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

export const setCurrentPageAC = (page: number) => {
    return {
        type: "SET-CURRENT-PAGES",
        payload: {page}
    } as const
}

export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        payload: {totalCount}
    } as const
}



