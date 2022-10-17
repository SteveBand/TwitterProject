import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../redux/mainglobal';
import { MainPageNav } from './navbar';
import { FeedPage } from './feed';
import { TweetModal } from './tweetmodal';


export const HomePage = () => {
    const showModal = useSelector((state) => state.posts.showModal);
    const posts = useSelector((state) => state.posts.postsList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowModal(false));
    },[posts])

    useEffect(() => {
    },[showModal])
    return (
        <React.StrictMode>
            <div className='main-page'>
                <MainPageNav />
                <FeedPage />
                {showModal ?
                    <TweetModal />
                    : null
                }
            </div>  
        </React.StrictMode>
    )
}