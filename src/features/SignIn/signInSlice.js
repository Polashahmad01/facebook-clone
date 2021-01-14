import { createSlice } from '@reduxjs/toolkit';

export const signInSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        signIn: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { signIn } = signInSlice.actions;

export const selectUser = state => state.user.user;

export default signInSlice.reducer;