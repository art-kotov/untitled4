import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "../bus/users/reducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga)

export default store
