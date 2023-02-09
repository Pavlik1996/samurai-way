import {UserPageType, UsersType} from "./store";

const initialState: UserPageType = {
    items: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    // error: null,
    isFetching: true
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
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        default:
            return state
    }
}

export type ActionsTypeUsers =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>

export const follow = (id: number) => {
    return {
        type: "FOLLOW",
        payload: {id}
    } as const
}

export const unFollow = (id: number) => {
    return {
        type: "UN-FOLLOW",
        payload: {id}
    } as const
}

export const setUsers = (users: UsersType[]) => {
    return {
        type: "SET-USERS",
        payload: {users}
    } as const
}

export const setCurrentPage = (page: number) => {
    return {
        type: "SET-CURRENT-PAGES",
        payload: {page}
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        payload: {totalCount}
    } as const
}

export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {isFetching}
    } as const
}



