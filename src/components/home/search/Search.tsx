import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SearchWrapper from '@/components/home/search/search.wrapper.style';
import SearchIconWrapper from '@/components/home/search/search.icon.style';
import StyledInputBase from '@/components/home/search/search.input.base';

const Search = () => (
    <SearchWrapper>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </SearchWrapper>
);

export default Search;