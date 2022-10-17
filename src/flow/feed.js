import React, { useState, useEffect, useRef } from 'react';
import {useSelector } from 'react-redux';
import { Post } from '../components/post';
import { InputFeed } from '../components/InputFeed';
import { WiSunrise } from 'react-icons/wi';
import { Feed, PostInput, TopPostInput, Title, TopTweets, DropDownBtn } from '../assets/feedStyled';
import { TopTweetsDD } from '../components/dropdowns/toptweetsDD';



export const FeedPage = () => {
    const textAreaInput = useSelector((state) => state.posts.textAreaInput);
    const posts = useSelector((state) => state.posts.postsList);
    const [showDropDown, setShowDropDown] = useState(false);
    const topTweetBtn = useRef(); 
    const openMenu = () => {
       return setShowDropDown(true);
    }

    useEffect(() => {
    }, [textAreaInput])

    useEffect(() => {
        const closeMenu = (e) => {
           if (e.path[1].tagName !== 'BUTTON') {
            setShowDropDown(false);
        }
           
     }
        document.body.addEventListener('click', closeMenu);

        return () => document.body.removeEventListener('click', closeMenu);
    }, []);

    return (
        <React.StrictMode>
            <Feed >
                <PostInput>
                    <TopPostInput>
                    <Title><h5>Home</h5></Title>
                        <TopTweets ref={topTweetBtn}  onClick={openMenu}><DropDownBtn type='submit'><WiSunrise style={{color:'white'}} /></DropDownBtn>
                            { showDropDown ? <TopTweetsDD /> :null }
                        </TopTweets>
                     </TopPostInput>
                    <InputFeed posts={posts}>
                        
                    </InputFeed>
                    <div className='tweets-posts'>
                        {posts ? 
                            posts.map((item) => {
                                const { content, username, logo, id, } = item;
                                return (
                                    <Post id={id} username={username} logo={logo} content={content} />
                                )
                            }) 
                            : <div></div>
                        }
                    </div>
                </PostInput>
        </Feed>
      </React.StrictMode>
    );
}