import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowModal } from '../redux/mainglobal';
import { FaTwitter } from 'react-icons/fa';
import { BiHomeCircle, BiHash, BiBell, BiBookmark, BiListUl, BiPen } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { CgProfile, CgMoreO } from 'react-icons/cg';
import { Nav, NavContent, TwitterIcon, Text, NavItems, NavTwitterIcon, TweetBtn } from '../assets/navbarStyled';


export const MainPageNav = ({ }) => {
    const dispatch = useDispatch();

    return (
        <React.StrictMode>
                <Nav>
                    <NavContent >
                        <NavTwitterIcon>
                            <TwitterIcon>
                                <FaTwitter/>
                            </TwitterIcon>
                            <Text />
                        </NavTwitterIcon>
                        <NavItems>
                            <div>
                                 <BiHomeCircle style={{margin:'5px', fontSize:'200%'}}/>
                            </div>
                            <Text>
                               Home
                            </Text>
                        </NavItems>
                        <NavItems>
                            <div>
                                <BiHash style={{margin:'5px', fontSize:'200%'}}/>
                            </div>
                            <Text>
                                 Explore
                            </Text>
                        </NavItems>
                        <NavItems>
                            <div>
                                <BiBell style={{margin:'5px', fontSize:'200%'}}/>
                            </div>
                            <Text>
                               Notifications
                            </Text>
                        </NavItems>
                        <NavItems>
                            <div>
                            <AiOutlineMail style={{margin:'5px', fontSize:'200%'}}/>
                            </div>
                            <Text>
                                Messages
                            </Text>
                        </NavItems>
                        <NavItems>
                            <div>
                               <BiBookmark style={{margin:'5px', fontSize:'200%'}}/>
                            </div>
                            <Text>
                                Bookmarks
                            </Text>
                        </NavItems>
                        <NavItems>
                            <div>
                                <BiListUl style={{margin:'5px', fontSize:'200%'}}/>
                            </div>
                            <Text>
                                Lists
                            </Text>
                        </NavItems>
                        <NavItems>
                            <div>
                                <CgProfile style={{margin:'5px', fontSize:'200%'}}/>
                            </div>
                            <Text>
                                Profile
                            </Text>
                        </NavItems>
                        <NavItems>
                            <div>
                                <CgMoreO style={{margin:'5px', fontSize:'200%'}}/>
                            </div>
                            <Text>
                                More
                            </Text>
                        </NavItems>
                            <TweetBtn onClick={() => dispatch(setShowModal(true))}>
                                Tweet
                            </TweetBtn>                    
                    </NavContent>
                </Nav>
        </React.StrictMode>
    )
}