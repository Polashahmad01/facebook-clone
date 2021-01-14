import { createSlice } from '@reduxjs/toolkit';

export const signUpSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        signUp: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { signUp } = signUpSlice.actions;

export const selectUser = state => state.user.user;

export default signUpSlice.reducer;