import React, { ChangeEvent, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from '@/components/home/search/Search.style';
import { Stack } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useDispatch } from 'react-redux';
import { setSearchKeyword } from '@/RTK/slices/SearchBookSlice';
import useDebouce from '@/hooks/useDebouce';


const Search = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebouce(inputValue , 800)
    useEffect(() => {
        setInputValue(debouncedValue);
    }, [debouncedValue]);
    const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        
       }
       useEffect(() => {
        dispatch(setSearchKeyword(debouncedValue)); 
    }, [debouncedValue, dispatch]); 
      
    return (
    <Stack direction={'row'} alignItems={'center'}>
        <SearchWrapper>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} onChange={handleChange}/>
        </SearchWrapper>
    </Stack>)

    };

export default Search;