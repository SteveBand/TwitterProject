import styled from "styled-components";


export const Nav = styled.section`
    position: sticky;
    width: 32vw;
    height: 70vh;
    top: 0;
    display: flex;
    justify-content: right;
    list-style-type: none;
`
export const NavContent = styled.div`
    display: flex;
    color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    max-width: 20vw;
    height: 65vh;
    align-items: center;
`

export const TwitterIcon = styled.div`
   margin: -5px;
   font-size: 180%;
   border-radius: 200px;
   color: rgb(151, 149, 149);
   padding: 10px;

   &:hover {
    transition: all;
    transition-duration: 600ms;
    color: rgb(182, 181, 181);;
    background-color: rgb(29, 155, 240, 0.1);
   }
`

export const Text = styled.div`
    width: 135px;
    margin-left: 0.2rem;
    font-size: 120%;

    @media only screen and (max-width:1300px){
        display: none;
    }
`;

export const NavItems = styled.div`
    position: sticky;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 12vw;
    height: 7vh;
    border-radius: 2.5rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover{
    transition: var(--transition);
    background-color: var(--nav-hover-color);
    }

    @media only screen and (max-height: 620px){
        margin-bottom: 0rem;
        height: 12vh;
        width: 4vw;
    }
`

export const NavItemsHidden = styled.div`
    position: sticky;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 12vw;
    height: 7vh;
    border-radius: 2.5rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover{
    transition: var(--transition);
    background-color: var(--nav-hover-color);
    }

    @media only screen and (max-height: 560px){
        display: none;
    }
`

export const NavItemsIcons = styled.svg`
    margin: 5px;
    font-size: 200%;
`

export const NavTwitterIcon = styled.div`
    position: sticky;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 12vw;
    height: 7vh;
    border-radius: 2.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    
    @media only screen and (max-height: 560px){
        margin-bottom: 0.4rem;
        
    }
`

export const TweetBtn = styled.div`
    border-radius: 5rem;
    font-size: 125%;
    padding: 1rem 6rem;
    background-color: var(--btn-color);
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
    transition: var(--transition);
    background-color: var(--btn-hover-color);
    }

    @media only screen and (max-width:1300px){
        font-size: 100%;
        padding: 0.7rem 1.5rem;
        left: 3rem;   
    }

    @media only screen and (max-height: 560px){ 
        margin-top: 0.4rem;
        padding: 0.5rem 1.2rem;
    }
`

