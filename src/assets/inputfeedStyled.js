import styled from "styled-components";

export const Profile = styled.div`
    position: relative;
    display: flex;
    margin: 10px 0 0 10px;
    flex-wrap: wrap;
`

export const ProfileLogo = styled.div`
    font-size: 60px;
    height: 45px;
    width: 60px;
    margin: 0;
    cursor: pointer;
`

export const NetSee = styled.div`
    position: relative;
    height: max-content;
    padding: 2px 15px 2px 25px;
    margin: 5px 150px 0 0;
    border: 1px solid var(--btn-li-hover-color);
    border-radius: 100px;
    display: flex;
    color: var(--btn-color);
    align-items: center;
    cursor: pointer;
    margin-right: 150px;

    & p {
        margin-right: 10px;
    }

    &:hover {
        transition: var(--transition);
        background-color: var(--btn-li-hover-color);
    }
`

export const Input = styled.div`
   min-height: 50px;
   max-height: 200px;
   margin-right: 100px;
   width: inherit;
   
`

export const TextArea = styled.textarea`
    background-color: transparent;
    max-width: 500px;
    min-height: 45px;
    max-height: 190px;
    width:auto;
    min-width: 300px;
    font-size: 20px;
    margin-left: 70px;
    color:white;
    border: none;
    outline: none;
    resize: none;  
    
    
    ::-webkit-scrollbar{
    width: 0px;
}
`

export const InputCanReplay = styled.div`
    position: relative;
    display: flex;
    width: inherit;
    color:var(--btn-color);
    font-size: 14px;
    margin: 0 0 10px 60px;
    padding: 3px 14px;
    border-radius: 30px;
    cursor: pointer;

    &:hover {
    transition: var(--transition);
    background-color: var(--btn-li-hover-color);       
    }

    & p {
        margin-left: 5px;
        font-weight: 600;
    }
`

export const InputUpload = styled.div`
    min-height: 50px;
    border-top: 1px solid gray;
    width: 85%;
    margin-left: 60px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    display: flex;
    
    & ul {
        display: flex;
        list-style: none;
        color: var(--btn-color);
        align-items: center;
        height: inherit;        
    }

    & li {
        padding: 4px 8px;
        border-radius: 30px;
        font-size: 20px;
        cursor: pointer;
    }

    & li:hover {
        transition: var(--transition);
        background-color: var(--btn-li-hover-color);   
    }
`

export const TweetBtnFeedContainer = styled.div`
   display: flex;
   width: inherit;
   justify-content: right;   
`

export const TweetBtnFeed = styled.button`
    border-radius: 5rem;
    font-size: 16px;
    padding: 10px 25px;
    border:none;
    outline: none;
    background-color: var(--btn-color);
    color: white;
    cursor: pointer;

    &:hover {
        transition: all 500ms ease-in-out;
        background-color: var(--btn-hover-color);    
    }
`

export const Hidden = styled.li`
    @media screen and (max-width: 1250px) {
        display: none;
    }
`

/////////NET SEE DROPDOWN CSS STARTS HERE!

export const NetSeeDropDownSection = styled.section`
    position: absolute;
    background-color: black;
    width: 250px;
    height: max-content;
    z-index: 50;
    top: 40px;
    left: -10px;
    box-shadow: 0px 0px 15px -2px rgba(255,255,255,0.5);
    border-radius: 20px;
    overflow: hidden;
`

export const EveryoneBtn = styled.article`
    width: 100%;
    height: 70px;
    display: flex;
    place-items: center;
    cursor: pointer;
    &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
    `

export const EveryoneBtnSvg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 200px;
    background-color: rgb(29, 155, 240);
    display: flex;
    place-items: center;
    justify-content: center;
    margin: 0 0 0 20px; 
`

export const TwitterCircleBtn = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    place-items: center;
    cursor: pointer;

    &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
`
export const TwitterCircleBtnSvg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 200px;
    background-color: rgb(0, 186, 124);
    display: flex;
    place-items: center;
    justify-content: center;
    margin: 0 0 0 20px; 
`

//////CANREPLY DROPDOWN STARTS HERE

export const CanReplyDropDownSection = styled.section`
    position: absolute;
    background-color: black;
    width: 300px;
    height: max-content;
    z-index: 50;
    top: 30px;
    transform: translateX(-28%);
    box-shadow: 0px 0px 15px -2px rgba(255,255,255,0.5);
    border-radius: 20px;
    overflow: hidden;

    transition: 500ms opacity;
`

export const EveryoneCanReplyBtn = styled.article`
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    place-items: center;
    cursor: pointer;

    &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
`
export const EveryoneCanReplyBtnSvg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 200px;
    background-color: rgb(29, 155, 240);
    display: flex;
    place-items: center;
    justify-content: center;
    margin: 0 5px 0 20px; 
`

export const PeopleYouFollowBtn = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    place-items: center;
    cursor: pointer;

    &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
`

export const PeopleYouFollowBtnSvg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 200px;
    background-color: rgb(29, 155, 240);
    display: flex;
    place-items: center;
    justify-content: center;
    margin: 0 5px 0 20px; 
`

export const PeopleMentionBtn = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    place-items: center;
    cursor: pointer;

    &:hover {
        background-color: rgb(151, 149, 149, 0.15);
    }
`

export const PeopleMentionBtnSvg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 200px;
    background-color: rgb(29, 155, 240);
    display: flex;
    place-items: center;
    justify-content: center;
    margin: 0 5px 0 20px; 
`