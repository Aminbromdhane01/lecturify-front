import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookState {
    title?: string | null,
    genre?: string | null,
    pages?: number | null,
    authorId?: number | null,
    description?: string | null,
    cover?: File | null,
    content?: File | null
}

export const initialState: BookState = {
    title: null,
    genre: null,
    pages: null,
    authorId: null,
    description: null,
    cover: null,
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
                state.cover = null,
                state.content = null
        },
    },
});

export const { setBook, clearBook } = bookSlice.actions;
export default bookSlice.reducer;