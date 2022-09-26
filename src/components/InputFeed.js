import React, { useEffect, useRef, useContext } from 'react'; 
import { content } from '../contexts/context';
import { MdAccountCircle, MdOutlinePlace } from 'react-icons/md'
import {FiChevronDown} from 'react-icons/fi'
import { GiEarthAmerica } from 'react-icons/gi';
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineFileGif, AiOutlineSchedule } from 'react-icons/ai'
import { BiPoll } from 'react-icons/bi'


export const InputFeed = () => { 
    const textField = useRef();
    const inputExpand = useRef();
    const { posts, setPosts, textAreaInput, setTextAreaInput } = useContext(content);
    const handleSumbit = () => {
        return (
            setPosts([{
                id: Date.now(),
                logo: <MdAccountCircle />,
                content: textAreaInput,
                username: 'username',

            }, ...posts]),
            textField.current.value = ''
        )
        
    }

    const handleTextArea = () => {
        textField.current.style.height = `50px`
        inputExpand.current.style.height = '50px'
        let height = textField.current.scrollHeight;
        textField.current.style.height = `${height}px`
        inputExpand.current.style.height = `${height}px`
    }

    useEffect(() => {
        setTextAreaInput('')
        console.log(posts)
     }, [posts])

    useEffect(() => {
    }, [textAreaInput])

    return (
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
                    ref={textField}
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
                <button className='tweet-btn-feed' onClick={handleSumbit} >tweet</button>
            </div>                           
        </div>
    </div>
    );
}