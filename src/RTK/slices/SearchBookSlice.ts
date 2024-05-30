import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
    keyword: string
}

export const initialSearchState: SearchState = {
    keyword: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState: initialSearchState,
    reducers: {
        setSearchKeyword(state, action: PayloadAction<string>) {
            state.keyword = action.payload;
        },
        clearSearchKeyword(state) {
            state.keyword = '';
        },
    },
});

export const { setSearchKeyword, clearSearchKeyword } = searchSlice.actions;
export default searchSlice.reducer;