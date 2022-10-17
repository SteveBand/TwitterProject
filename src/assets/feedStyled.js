import styled from "styled-components";

export const Feed = styled.div`
max-width: 32vw;
min-width: 400px;
height: 100vh;
border: 1px solid gray;
border-top: none;
border-bottom: none;
`;

export const PostInput = styled.section`
    color: white;
    height: 250px;
` ;

export const TopPostInput = styled.div`
    display: flex;
`;

export const Title = styled.div`
    margin:15px 15px;
    font-size: 25px;
    width: 520px;
`;

export const TopTweets = styled.div`
    padding: 4px 6px;
    width: max-content;
    height: max-content;
    margin: 5px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
    justify-content: center;
    align-content: center;

    &:hover{
        background-color: rgb(151, 149, 149, 0.2);
    }
`;

// TopTweetsDropDOWN CSS STARTS HERE //////
export const TopTweetsDropDown = styled.section`
    position: absolute;
    top: 12px;
    right: 0;
    width: 350px;
    height: max-content;
    background-color: white;
    z-index: 50;
    background-color: black;
    box-shadow: 0px 0px 20px -2px rgba(255,255,255,0.5);
    border-radius: 10px;
    overflow: hidden;
`

export const LatestBtn = styled.article`
    display: flex;
    padding: 10px 20px;
    align-items: center;

    &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
`

export const PrefBtn = styled.article`
    display: flex;
    padding: 12px 20px;
    align-items: center;

    &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
`

export const DropDownBtn = styled.button`
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    position: relative;
`