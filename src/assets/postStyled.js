import styled from "styled-components";

const transition = `500ms ease-out`;

export const TweetContent = styled.div`
    width: 100%;
    max-height: 600px;
    border: 1px solid var(--post-border-color);
    border-right: none;
    border-left: none; 
    
    &:hover {
        background-color: var(--nav-hover-color);        
    }
`

export const TweetDetails = styled.div`
    padding-left: 12px;
    display: flex;
    flex-wrap: nowrap;
    margin-top: 5px;
    width: inherit;    
`

export const TweetProfileLogo = styled.div`
    font-size: 45px;
    margin-right: 5px;
`

export const PostContent = styled.div`
    max-width: 85%;
    height: auto;
    padding-top: 10px;
    flex-wrap: wrap;
`

export const TweetUsername = styled.div`
    color: whitesmoke;
    width: 100%;
    font-weight: 600;
    letter-spacing: 1px;
`

export const ContentInput = styled.div`
    width: 140%;
    margin: 0;
    padding: 0;
    display: flex;
`

export const TweetMore = styled.div`
    font-size: 23px;
    color: gray;
    padding: 3px 3px;
    height: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: inherit;
    justify-content: right;    
`

export const TweetMoreBtn = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30px;
    height: 30px;

    &:hover {
        transition: all;
        border-radius: 30px;
        background-color: var(--btn-li-hover-color);   
    }
`

export const PostSocial = styled.div`
    width: 100%;
    padding: 10px 80px 5px 80px;

    & ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        color: gray; 
    }

    & li {
        padding: 4px 8px;
        font-size: 16px;
        color: gray;
        border-radius: 30px;
        display: flex;
        align-items: center;
        border-radius: 30px;  
    }
`

export const PostIcons = styled.svg`
    border-radius: 30px;
    margin-right: 10px;
    font-size: 16px;
    display: flex;
    align-items: center; 
    cursor: pointer; 
`

export const PostIconsComment = styled.div`
    border-radius: 30px;
    margin-right: 10px;
    font-size: 16px;
    display: flex;
    align-items: center; 
    cursor: pointer; 

    &:hover{
        color: var(--btn-color);
        transition: var(--transition);
    }
`

export const PostIconsRetweet = styled.div`
    border-radius: 30px;
    margin-right: 10px;
    font-size: 16px;
    display: flex;
    align-items: center; 
    cursor: pointer; 

    &:hover{
        color: rgb(37, 158, 37, 1);
        transition: var(--transition);
}
`


export const PostIconsUpload = styled.div`
    border-radius: 30px;
    margin-right: 10px;
    font-size: 16px;
    display: flex;
    align-items: center; 
    cursor: pointer; 

    &:hover{
        color: var(--btn-color);
        transition: var(--transition);    
    }
`

export const PostIconsHeart = styled.div`
    border-radius: 30px;
    margin-right: 10px;
    font-size: 16px;
    display: flex;
    align-items: center; 
    cursor: pointer; 

    &:hover{
        color: rgb(249, 24, 128);
        transition: var(--transition)
    }
`

export const Icons = styled.div`
    padding: 6px 6px;
    border-radius: 30px;
    display: flex;
    align-items: center;
`

export const IconsUpload= styled.div`
    padding: 6px 6px;
    border-radius: 30px;
    display: flex;
    align-items: center;

    &:hover{
        background-color: var(--btn-li-hover-color);
        transition: var(--transition);  
    }
`

export const IconsComment= styled.div`
    padding: 6px 6px;
    border-radius: 30px;
    display: flex;
    align-items: center;

    &:hover{
        background-color: var(--btn-li-hover-color);
        transition: var(--transition);
    }
`

export const IconsHeart= styled.div`
    padding: 6px 6px;
    border-radius: 30px;
    display: flex;
    align-items: center;

    &:hover{
        background-color: rgb(249, 24, 128, 0.2);
        transition: var(--transition);
    }

    color: ${(props) => props.active ? `${'rgb(249, 24, 128)'}` : null};
    fill: ${(props) => props.active ? `${'rgb(249, 24, 128)'}` : null};
    transition: ${(props) => props.active ? transition : null};
    transform:${(props) => props.active ? 'scale(1.3)' : null} ;

`

export const IconsRetweet= styled.div`
    padding: 6px 6px;
    border-radius: 30px;
    display: flex;
    align-items: center;

    &:hover{
        background-color: rgb(37, 158, 37, 0.25);
        transition: var(--transition);
    }
`

export const PostNum = styled.div`
    margin-left: 10px;
    color: ${(props) => props.like ? `${'rgb(249, 24, 128)'}` : null};
    transition: ${(props) => props.like ? transition : null};
`

///POST DROP DOWN CSS////

export const PostMoreDropDown = styled.section`
    position: absolute;
    top: 5px;
    right: 0;
    width: 280px;
    height: 350px;
    z-index: 50;
    background-color: black;
    box-shadow: 0px 0px 12px -2px rgba(255,255,255,0.5);
    border-radius: 10px;
    overflow: hidden;
`

export const IntresBtn = styled.article`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    &:hover{
        &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
    }
`

export const UnfollowBtn = styled.article`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

    &:hover{
        &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
    }
`

export const ListBtn = styled.article`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    
    &:hover{
        &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
    }
`

export const MuteBtn = styled.article`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    
    &:hover{
        &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
    }
`

export const BlockBtn = styled.article`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    
    &:hover{
        &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
    }
`

export const EmbedBtn = styled.article`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    
    &:hover{
        &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
    }
`

export const ReportBtn = styled.article`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    
    &:hover{
        &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
    }
`