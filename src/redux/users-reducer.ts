import { Dispatch } from "redux";
import { userAPI } from "../api/api";

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

export const usersReducer = (
  state: UserPageType = initialState,
  action: ActionsTypeUsers
): UserPageType => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        items: state.items.map((el) =>
          el.id === action.payload.id ? { ...el, followed: true } : el
        ),
      };
    }
    case "UN-FOLLOW": {
      return {
        ...state,
        items: state.items.map((el) =>
          el.id === action.payload.id ? { ...el, followed: false } : el
        ),
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

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<ActionsTypeUsers>) => {
    dispatch(setIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((r) => {
      console.log(r);

      dispatch(setIsFetching(false));
      dispatch(setUsers(r.data.items));
      dispatch(setTotalUsersCount(r.data.totalCount));
    });
  };
};

export const follow = (id: number) => {
  return (dispatch: Dispatch<ActionsTypeUsers>) => {
    dispatch(toggleIsFollowing(true, id));
    userAPI.follow(id).then((r) => {
      if (r.data.resultCode === 0) {
        dispatch(acceptFollow(id));
      }
      dispatch(toggleIsFollowing(false, id));
    });
  };
};

export const unFollow = (id: number) => {
  return (dispatch: Dispatch<ActionsTypeUsers>) => {
    dispatch(toggleIsFollowing(true, id));
    userAPI.unFollow(id).then((r) => {
      if (r.data.resultCode === 0) {
        dispatch(acceptUnFollow(id));
      }
      dispatch(toggleIsFollowing(false, id));
    });
  };
};
