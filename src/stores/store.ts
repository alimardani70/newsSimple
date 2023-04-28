import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postsSlice from "./postsSlice";

import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "ramand",
  storage,
};

const reducer = combineReducers({
  auth: authSlice,
  posts: postsSlice
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
