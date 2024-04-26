import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    userId: string | null;
    email: string | null;
    fullName: string | null;
}

export const initialState: UserState = {
    userId: null,
    email: null,
    fullName: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ userId: string; email: string, fullName: string }>) {
            state.userId = action.payload.userId;
            state.email = action.payload.email;
            state.fullName = action.payload.fullName
        },
        clearUser(state) {
            state.userId = null;
            state.email = null;
            state.fullName = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;