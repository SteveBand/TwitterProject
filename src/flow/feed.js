import React, {useState, useEffect, useRef} from 'react';
import '../assets/feed.css'
import { MdAccountCircle, MdOutlinePlace } from 'react-icons/md'
import { WiSunrise } from 'react-icons/wi'
import {FiChevronDown} from 'react-icons/fi'
import { GiEarthAmerica } from 'react-icons/gi';
import { BsCardImage, BsEmojiSmile} from 'react-icons/bs';
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai'
import {BiPoll} from 'react-icons/bi'

export const FeedPage = () => {
    const textArea = useRef();
    const inputExpand = useRef();
    const [textAreaInput, setTextAreaInput]= useState('')
    
    const handleTextArea = () => {
        textArea.current.style.height = `50px`
        inputExpand.current.style.height = '50px'
        let height = textArea.current.scrollHeight;
        textArea.current.style.height = `${height}px`
        inputExpand.current.style.height = `${height}px`
    }

    useEffect(() => {
       console.log(textAreaInput)
    },[textAreaInput])

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
                                <button className='tweet-btn-feed'>tweet</button>
                                </div>
                            
                        </div>
                    </div>
                 </section>
            </div>
      </React.StrictMode>
    );
}