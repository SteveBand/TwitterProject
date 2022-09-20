import React, {useState, useEffect, useRef, useMemo} from 'react';
import '../assets/feed.css'
import { MdAccountCircle, MdOutlinePlace, MdMoreHoriz, MdOutlineQuickreply } from 'react-icons/md'
import { WiSunrise } from 'react-icons/wi'
import {FiChevronDown} from 'react-icons/fi'
import { GiEarthAmerica } from 'react-icons/gi';
import { BsCardImage, BsEmojiSmile, BsHeart, BsUpload} from 'react-icons/bs';
import { AiOutlineFileGif, AiOutlineSchedule, AiOutlineRetweet } from 'react-icons/ai'
import {BiLike, BiPoll} from 'react-icons/bi'

export const FeedPage = () => {
    const textArea = useRef();
    const inputExpand = useRef();
    const [textAreaInput, setTextAreaInput] = useState('')
    const [posts, setPosts] = useState([]);

    let postfeed = posts

    const handleSumbit = () => {
        return setPosts([{
                like: 0,
                retweet: 0,
                comment: 0,
                content: textAreaInput,
                username: 'username',

            }, ...posts])
    }
    
    const handleTextArea = () => {
        textArea.current.style.height = `50px`
        inputExpand.current.style.height = '50px'
        let height = textArea.current.scrollHeight;
        textArea.current.style.height = `${height}px`
        inputExpand.current.style.height = `${height}px`
    }

    useEffect(() => {
    }, [textAreaInput])
    
   useEffect(() => {
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
                    <div className='profile'>
                        <div className='profile-logo'>
                            <MdAccountCircle className='profile-logo-img'/>
                        </div>
                        <div className='net-see'>
                            <p>Everyone</p>
                            <FiChevronDown/>
                        </div>
                        <div
                            className='input'
                            ref={inputExpand}>
                       <form >
                                <textarea
                                    type='text'
                                    placeholder='Whats happening?'
                                    rows="1"
                                    maxLength='200'
                                    cols="1"
                                    ref={textArea}
                                    onKeyUp={(() => {
                                        handleTextArea();
                                    })}
                                    onChange={((e) => {
                                      setTextAreaInput(e.target.value)
                                    })}
                                />
                       </form>
                        </div>
                        <div className='input-can-reply'>
                            <GiEarthAmerica className='earth-icon'/><p>Everyone can reply</p>
                        </div>
                        
                        <div className='input-upload'>
                            <div>
                             <ul>
                                <li><BsCardImage/></li>
                                <li><AiOutlineFileGif/></li>     
                                <li><BiPoll /></li>
                                <li><BsEmojiSmile /></li>
                                <li><AiOutlineSchedule /></li>
                                <li><MdOutlinePlace/></li>
                                </ul>
                            </div>
                            <div className='tweet-btn-feed-container'>
                                <button className='tweet-btn-feed' onClick={handleSumbit}>tweet</button>
                            </div>                           
                        </div>
                    </div>
                    <div className='tweets-posts'>
                        {posts ? 
                            postfeed.map((post) => {
                                const { like, retweet, comment, content, username, logo } = post;
                                return (
                                    <div className='tweet-content'>
                                        <div className='tweet-details'>
                                            <div className='tweet-profile-logo'><MdAccountCircle /></div>
                                            <div className='post-content'>
                                                <div className='tweet-username'><p>{username}</p></div>
                                                <div className='content-input'>{content}</div>
                                            </div>
                                            <div className='tweet-more'><MdMoreHoriz/></div>
                                            
                                        </div>
                                        <div className='post-social'>
                                            <ul>
                                                <li><MdOutlineQuickreply /></li>
                                                <li><AiOutlineRetweet /></li>
                                                <li><BsHeart /></li>
                                                <li><BsUpload/></li>
                                            </ul>
                                        </div>                                                                               
                                    </div>
                                );
                            })
                            : <div></div>}
                    </div>
                 </section>
            </div>
      </React.StrictMode>
    );
}