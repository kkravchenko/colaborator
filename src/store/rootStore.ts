import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './dataStore'
import sortReducer from './sortStore'
import filterReducer from './filterStore'
import pageReducer from './pageStore'

const store = configureStore({
  reducer: {
    flightData: dataReducer,
    sortData: sortReducer,
    filterData: filterReducer,
    page: pageReducer
  }
})

export default store

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
