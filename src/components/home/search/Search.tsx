import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from './Search.style';
import { Stack } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const Search = () => (
    <Stack direction={'row'} alignItems={'center'}>
        <FilterAltIcon />
        <SearchWrapper>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </SearchWrapper>
    </Stack>

);

export default Search;