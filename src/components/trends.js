import React from 'react'; 
import { TrendsBox, TrendsContainer } from '../assets/trendsStyled';
import { SearchBar } from './searchBar';


export const Trends = () => {

    return (
        <TrendsBox>
            <SearchBar />
            <TrendsContainer>
                
            </TrendsContainer>
        </TrendsBox>
    );
}