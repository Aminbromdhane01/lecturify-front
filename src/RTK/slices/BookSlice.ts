import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BookState {
    title?: string | null |undefined,
    userId? : number |null |undefined

    genre?: string | null | undefined,
    pages?: number | null | undefined,
    authorId?: number | null |undefined,
    description?: string | null |undefined,
    files?: File | null |undefined,
    content?: File | null | undefined
}

export const initialState: BookState = {
    title: null,
    genre: null,
    pages: null,
    authorId: null,
    description: null,
    files: null,
    content: null,
};

const bookSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setBook(state, action: PayloadAction<BookState>) {
            return { ...state, ...action.payload };

        },
        clearBook(state) {
            state.title = null,
                state.genre = null,
                state.pages = null,
                state.authorId = null,
                state.description = null,
                state.files = null,
                state.content = null
        },
    },
});

export const { setBook, clearBook } = bookSlice.actions;
export default bookSlice.reducer;