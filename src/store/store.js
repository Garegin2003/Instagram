import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { messagesReducer } from "./slices/messages/messagesSlice";
import { postsReducer } from "./slices/posts/postsSlice";
import { searchReducer } from "./slices/search/searchSlice";
import { usersReducer } from "./slices/users/usersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const searchLowerCase = store => next => action => {
    if (action.type === 'search/toggleSearch') {
        action.payload = action.payload.toLowerCase()
    }
    next(action)
}

const ignoreEmptyMessage = store => next => action => {
    if (action.type === 'posts/addComment' && !action.payload.body.replaceAll(' ','')) return
    next(action)
}

const persistConfig = {
    key: 'instagram',
    storage,
}

const rootReducer = combineReducers({
    posts: postsReducer,
    search: searchReducer,
    users: usersReducer,
    messages: messagesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return [...getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }), searchLowerCase, ignoreEmptyMessage]
    }
})

export const persistor = persistStore(store)

export default store