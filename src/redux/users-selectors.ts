import { AppStateType } from "./redux-store";

export const getItems = (state: AppStateType) => {
    return state.usersPage.items
}
export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getIsFollowing = (state: AppStateType) => {
    return state.usersPage.isFollowing
}
export const getIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}