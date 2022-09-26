import React, { useState, useEffect, useContext } from 'react';
import { content } from '../contexts/context';
import { Post } from '../components/post';
import { InputFeed } from '../components/InputFeed';
import '../assets/feed.css'
import { WiSunrise } from 'react-icons/wi'


export const FeedPage = () => {
    const { posts, setPosts, textAreaInput, setTextAreaInput } = useContext(content);

    useEffect(() => {
    }, [textAreaInput])
    
    useEffect(() => {
       setTextAreaInput('')
       console.log(posts)
    }, [posts])

    return (
        <React.StrictMode>
            <div className='feed'>
                <section className='post-input'>
                    <div className='top-post-input'>
                    <div className='title'>
                        <h5>Home</h5>
                    </div>
                    <div className='top-tweets'>
                         <WiSunrise/>
                        </div>
                    </div>
                    <InputFeed posts={posts} setPosts={setPosts} textAreaInput={textAreaInput} setTextAreaInput={setTextAreaInput}/>
                    <div className='tweets-posts'>
                        {posts ? 
                            posts.map((item) => {
                                const { content, username, logo, id, isLike, liked } = item;
                                return (
                                    <Post id={id} username={username} logo={logo} content={content} isLike={isLike} liked={liked}/>
                                )
                            }) 
                            : <div></div>
                        }
                    </div>
                 </section>
            </div>
      </React.StrictMode>
    );
}