import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {  ResponceType, userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helper";

export type UserPageType = {
  items: UsersType[];
  pageSize: number;
  totalCount: number;
  currentPage: number;
  error: null;
  isFetching: boolean;
  isFollowing: number[];
};

export type UsersType = {
  name: string;
  id: number;
  uniqueUrlName: null;
  photos: {
    small: null;
    large: null;
  };
  status: null;
  followed: boolean;
};

const initialState: UserPageType = {
  items: [],
  pageSize: 5,
  totalCount: 0,
  currentPage: 1,
  error: null,
  isFetching: true,
  isFollowing: [],
};

export const usersReducer = (state: UserPageType = initialState, action: ActionsTypeUsers): UserPageType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        items: updateObjectInArray(state.items, action.payload.id, {followed: true})
      };
    }
    case "UN-FOLLOW": {
      return {
        ...state,
        items: updateObjectInArray(state.items, action.payload.id, {followed: false})
      };
    }
    case "SET-USERS": {
      return { ...state, items: action.payload.users };
    }
    case "SET-CURRENT-PAGES": {
      return { ...state, currentPage: action.payload.page };
    }
    case "SET-USERS-TOTAL-COUNT": {
      return { ...state, totalCount: action.payload.totalCount };
    }
    case "TOGGLE-IS-FETCHING": {
      return { ...state, isFetching: action.payload.isFetching };
    }
    case "TOGGLE-IS-FOLLOWING": {
      return {
        ...state,
        isFollowing: action.payload.isFollowing
          ? [...state.isFollowing, action.payload.id]
          : state.isFollowing.filter((id) => id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};

export type ActionsTypeUsers =
  | ReturnType<typeof acceptFollow>
  | ReturnType<typeof acceptUnFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof setIsFetching>
  | ReturnType<typeof toggleIsFollowing>;

export const acceptFollow = (id: number) => {
  return {
    type: "FOLLOW",
    payload: { id },
  } as const;
};

export const acceptUnFollow = (id: number) => {
  return {
    type: "UN-FOLLOW",
    payload: { id },
  } as const;
};

export const setUsers = (users: UsersType[]) => {
  return {
    type: "SET-USERS",
    payload: { users },
  } as const;
};

export const setCurrentPage = (page: number) => {
  return {
    type: "SET-CURRENT-PAGES",
    payload: { page },
  } as const;
};

export const setTotalUsersCount = (totalCount: number) => {
  return {
    type: "SET-USERS-TOTAL-COUNT",
    payload: { totalCount },
  } as const;
};

export const setIsFetching = (isFetching: boolean) => {
  return {
    type: "TOGGLE-IS-FETCHING",
    payload: { isFetching },
  } as const;
};

export const toggleIsFollowing = (isFollowing: boolean, id: number) => {
  return {
    type: "TOGGLE-IS-FOLLOWING",
    payload: { id, isFollowing },
  } as const;
};

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<ActionsTypeUsers>) => {
  dispatch(setIsFetching(true));
  dispatch(setCurrentPage(currentPage))
  const r = await userAPI.getUsers(currentPage, pageSize)
  dispatch(setIsFetching(false));
  dispatch(setUsers(r.data.items));
  dispatch(setTotalUsersCount(r.data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: Dispatch<ActionsTypeUsers>, 
  id: number, 
  apiMethod: (id: number) => Promise<AxiosResponse<ResponceType<{ resultCode: number; }>, any>>,
  actionCreator: (id: number) => ActionsTypeUsers
  ) => {

  dispatch(toggleIsFollowing(true, id));
  const r = await apiMethod(id)
  if (r.data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleIsFollowing(false, id));
}

export const follow = (id: number) =>  (dispatch: Dispatch<ActionsTypeUsers>) => {
  followUnfollowFlow(dispatch, id, userAPI.follow.bind(userAPI), acceptFollow)
};

export const unFollow = (id: number) =>  (dispatch: Dispatch<ActionsTypeUsers>) => {
  followUnfollowFlow(dispatch, id, userAPI.unFollow.bind(userAPI), acceptUnFollow)
};
