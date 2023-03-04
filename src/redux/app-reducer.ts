import { Dispatch } from "react";
import {  getAuthUserData } from "./auth-reducer";


export type stateAppType = {
  initialized: boolean
};

const initialState: stateAppType = { initialized: false }

export const Appreducer = (state = initialState, action:AppReducerZctionsType ): stateAppType => {
  switch (action.type) {
    case "ITITIALIZED":
      return {
        ...state,
        initialized: true
      }
    default: return state
  }
}

type AppReducerZctionsType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => {
  return {
    type: "ITITIALIZED"
  } as const
}

export const initializeApp = () => (dispatch: any)=> {
    dispatch(getAuthUserData())
        .then(() => dispatch(initializedSuccess()))
}




