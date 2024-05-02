import React, { ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from '@/components/home/search/Search.style';
import { Stack } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useDispatch } from 'react-redux';
import { setSearchKeyword } from '@/RTK/slices/SearchBookSlice';


const Search = () => {
    const dispatch = useDispatch();
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        const value : string = event.target.value
        dispatch(setSearchKeyword(value))
        
       }
    return (
    <Stack direction={'row'} alignItems={'center'}>
        <FilterAltIcon />
        <SearchWrapper>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} onChange={handleChange}/>
        </SearchWrapper>
    </Stack>)

    };

export default Search;