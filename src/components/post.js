import React, { useState } from 'react';
import { MdMoreHoriz, MdOutlineQuickreply } from 'react-icons/md';
import { AiOutlineRetweet, AiFillHeart } from 'react-icons/ai'
import { BsUpload } from 'react-icons/bs';

export const Post = ({id, logo, username, content,}) => {
    const [retweet, setReTweet] = useState(0);
    const [comment, setComment] = useState(0);
    const [like, setLike] = useState(0);
    const [activeLike, setActiveLike] = useState(false);
    const [activeComment, setActiveComment] = useState(false);
    const [activeReTweet, setActiveReTweet] = useState(false);

    const handleComment = () => {
        setActiveComment(!activeComment);
        setComment((prev) => activeComment ? prev - 1 : prev + 1);
    }

    const handleLike = () => {
        setActiveLike(!activeLike);
        setLike((prev) => activeLike ? prev - 1 : prev + 1);
    }

    const handleRetweet = () => {
        setActiveReTweet(!activeReTweet);
        setReTweet((prev) => activeReTweet ? prev - 1 : prev + 1)
        
    }

    return ( 
        <div className='tweet-content' key={id}>
            <div className='tweet-details'>
                <div className='tweet-profile-logo'>{logo}</div>
                <div className='post-content'>
                    <div className='tweet-username'><p>{username}</p></div>
                    <div className='content-input'>{content}</div>
                </div>
                <div className='tweet-more'><MdMoreHoriz /></div>
                                        
            </div>
            <div className='post-social'>
                <ul>
                    <li onClick={handleComment}><div className='post-icons post-icons-comment'><div className='icons comment'><MdOutlineQuickreply /></div><div className='post-num'>{comment}</div></div></li>
                    <li onClick={handleRetweet}><div className='post-icons post-icons-retweet'><div className='icons retweet'><AiOutlineRetweet /></div><div className='post-num'>{retweet}</div></div></li>
                    <li onClick={handleLike}><div className='post-icons post-icons-heart'><div className='icons heart'><AiFillHeart className={`${activeLike ? 'active-heart' : 'default-icon'}`} /></div><div className={`${activeLike ? 'active-heart-num post-num' : 'post-num'}`}>{like}</div></div></li>
                    <li ><div className='post-icons post-icons-upload'><div className='icons upload'><BsUpload /></div></div></li>
                </ul>
            </div>
        </div>
    );
}