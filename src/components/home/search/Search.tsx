import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from './Search.style';


const Search = () => (
    <SearchWrapper>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </SearchWrapper>
);

export default Search;