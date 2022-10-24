import React, {useRef, useState, useEffect} from 'react';
import { SearchBarBackground, SearchBarBox, SearchBarInput, SearchBtn, SearchDropDown } from '../assets/trendsStyled';
import {IoSearchOutline} from 'react-icons/io5'

export const SearchBar = () => {
    const searchBarContainer = useRef();
    const searchBtn= useRef();
    const [searchClicked, setSearchClicked] = useState(false)
    

    const handleClick = (e) => {
        if (searchBarContainer.current.contains(e.target)) {
            setSearchClicked(true)
        };
        if (!searchBarContainer.current.contains(e.target)) {
            setSearchClicked(false)
        };
    }

    useEffect(() => {
        document.body.addEventListener('click',handleClick);

        return () => document.body.removeEventListener('click', handleClick);
    }, [])

    useEffect(() => {
        console.log(searchClicked);
    }, [searchClicked])

    return (
        <SearchBarBackground>
        <SearchBarBox ref={searchBarContainer} active={searchClicked}>
            <SearchBtn active={searchClicked}>
                <IoSearchOutline style={{fontSize:'22px'}}/>
            </SearchBtn>
            <SearchBarInput type='text' placeholder='Search Twitter' />
            { searchClicked ?
                <SearchDropDown>
                    <p style={{ color: 'rgb(113, 118, 123)', marginTop: '15px' }}>Try searching for people, topics, or keywords</p>
                </SearchDropDown>
            : null}
            </SearchBarBox>
            </SearchBarBackground>
    );
}