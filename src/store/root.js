import { combineReducers } from '@reduxjs/toolkit'

// features
import appReducer, { appSlice } from 'src/store/features/app'
import { toastsSlice } from 'src/store/features/toasts'

// apis
import { baseApi } from 'src/store/api/baseApi'

export const root = {
  // slices
  [appSlice.name]: appReducer,
  [toastsSlice.name]: toastsSlice.reducer,

  // api
  [baseApi.reducerPath]: baseApi.reducer,
}

export const apiMiddleware = [baseApi.middleware]

const combinedReducer = combineReducers(root)

// global reducer
export const rootReducer = (state = {}, action = {}) => {
  switch (action.type) {
    default:
      break
  }

  // noinspection JSCheckFunctionSignatures
  return combinedReducer(state, action)
}
