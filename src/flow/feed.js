import React, {useState, useEffect, useRef} from 'react';
import './main-page-mid.css';
import { MdAccountCircle } from 'react-icons/md'
import { WiSunrise } from 'react-icons/wi'
import {FiChevronDown} from 'react-icons/fi'
import { text } from '@fortawesome/fontawesome-svg-core';

export const FeedPage = () => {
    const textArea = useRef()
    const [textAreaInput, setTextAreaInput]= useState('')
    
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
                        <div className='input'>
                       <form >
                                <textarea
                                    type='text'
                                    placeholder='Whats happening?'
                                    rows='4'
                                    maxLength='200'
                                    cols='7'
                                    ref={textArea}
                                    onKeyUp={(() => {
                                        textArea.current.style.height = `50px`
                                        textArea.current.style.maxHeight = '190px'
                                       let height = textArea.current.scrollHeight;
                                       textArea.current.style.height = `${height}px`
                                    })}
                                    onChange={((e) => {
                                      setTextAreaInput(e.target.value)
                                    })}
                                />
                       </form>
                    </div>
                    </div>
                 </section>
            </div>
      </React.StrictMode>
    );
}