import React from 'react'; 
import { TrendsBox, TrendsContainer } from '../../assets/trendsStyled';
import { SearchBar } from '../searchBar';


export const Trends = () => {

    return (
        <TrendsBox>
            <SearchBar />
            <TrendsContainer>
                <h2 style={{color: 'white', padding:'15px 0 10px 20px', fontSize:'23px'}}>Trends for you</h2>
            </TrendsContainer>
        </TrendsBox>
    );
}