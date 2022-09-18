import React from 'react';
import './main-page-nav.css';
import { FaTwitter } from 'react-icons/fa';
import { BiHomeCircle, BiHash, BiBell, BiBookmark, BiListUl, BiPen } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { CgProfile, CgMoreO } from 'react-icons/cg';


export const MainPageNav = () => {

    return (
        <React.StrictMode>
                <section className='nav'>
                    <article className='nav-content'>
                        <div className='nav-items'>
                            <div className='twitter-icon icon'>
                                <FaTwitter />
                            </div>
                            <div className='text'>
                            </div>
                        </div>
                        <div className='nav-items'>
                            <div>
                                 <BiHomeCircle className='icon'/>
                            </div>
                            <div className='text'>
                               Home
                            </div>
                        </div>
                        <div className='nav-items'>
                            <div>
                                <BiHash className='icon'/>
                            </div>
                            <div className='text'>
                                 Explore
                            </div>
                        </div>
                        <div className='nav-items'>
                            <div>
                                <BiBell className='icon'/>
                            </div>
                            <div className='text'>
                               Notifications
                            </div>
                        </div>
                        <div className='nav-items'>
                            <div>
                            <AiOutlineMail className='icon'/>
                            </div>
                            <div className='text'>
                                Messages
                            </div>
                        </div>
                        <div className='nav-items'>
                            <div>
                               <BiBookmark className='icon'/>
                            </div>
                            <div className='text'>
                                Bookmarks
                            </div>
                        </div>
                        <div className='nav-items'>
                            <div>
                                <BiListUl className='icon'/>
                            </div>
                            <div className='text'>
                                Lists
                            </div>
                        </div>
                        <div className='nav-items'>
                            <div>
                                <CgProfile className='icon'/>
                            </div>
                            <div className='text'>
                                Profile
                            </div>
                        </div>
                        <div className='nav-items'>
                            <div>
                                <CgMoreO className='icon'/>
                            </div>
                            <div className='text'>
                                More
                            </div>
                        </div>
                            <div className='tweet-btn'>
                                Tweet
                            </div>                    
                    </article>
                </section>
        </React.StrictMode>
    )
}