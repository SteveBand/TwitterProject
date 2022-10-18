import styled from "styled-components";

const backGroundColor = 'rgb(22, 24, 28)'

export const TrendsBox = styled.section`
height: 890px;
width: 350px;
margin-left: 35px;
display: flex;
justify-content: center;
flex-direction: column;
` 
export const TrendsContainer = styled.section`
    position: relative;
    background-color: ${backGroundColor};
    width: inherit;
    height: inherit;
    margin-top: 20px;
    border-radius: 20px;
`







//SEARCH BAR CSS ////

export const SearchBarBox = styled.section`
    position: sticky;
    top: 5px;
    background-color:${prop => prop.active ? 'black': backGroundColor };
    border: ${prop => prop.active ? '1px solid rgb(26, 120, 260, 0.7)' : 'none'};
    width: 350px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    z-index: 50;
`

export const SearchBarInput = styled.input`
    background-color: transparent;
    color: rgb(231, 233, 234);
    border: none;
    outline: none;
    width: 250px;
    padding: 12px;
    font-size: 16px;
`

export const SearchBtn = styled.div`
    width: 30px;
    margin: 0 0 0 12px;
    height: 50px;
    display: flex;
    place-items: center;
    justify-content: center;
    color: ${prop => prop.active ? 'rgb(26, 120, 260, 0.9)' : 'rgb(113, 118, 123)'};
`
///SEARCH BAR DROP DOWN ///
export const SearchDropDown = styled.section`
    position: absolute;
    top: 50px;
    left: 5px;
    width: 370px;
    height: 100px;
    background-color: black;
    box-shadow: 0px 0px 12px -2px rgba(255,255,255,0.7);
    border-radius: 12px;
    display: flex;
    justify-content: center;
`
