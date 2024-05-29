import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EssayState {
    content?: string | null | undefined
}

export const initialState: EssayState = {
    content: null,
};

const essaySlice = createSlice({
    name: 'essayslice',
    initialState,
    reducers: {
        setContent(state, action: PayloadAction<string>) {
            state.content = action.payload;
        },
        clearContent(state) {
            state.content = null;
        },
    },
});

export const { setContent, clearContent } = essaySlice.actions;
export default essaySlice.reducer;