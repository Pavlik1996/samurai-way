import { UsersType } from "../redux/users-reducer"

export const updateObjectInArray = (items: UsersType[], itemId: number, newObjProps: any) => {
    return items.map(el => el.id === itemId ? { ...el, ...newObjProps } : el)
}