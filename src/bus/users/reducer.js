import {createAction, createSlice} from "@reduxjs/toolkit";

export const downloadData = createAction("DOWNLOAD_DATA");

const initialState = {
    usersList: [
        {
            id: 0,
            name: "Name",
            email: "email.com"
        }
    ],
    isFetching: false
};

const usersReducer = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        setUsers: (state, {payload}) => ({...state, usersList: payload}),
        changeStatus: (state) => ({...state, isFetching: !state.isFetching})
    }
});

export const {setUsers, changeStatus} = usersReducer.actions;
export default usersReducer.reducer;
