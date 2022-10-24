import React, { useContext } from 'react';
import { content } from '../../../contexts/context';
import { CanReplyDropDownSection, EveryoneCanReplyBtn, EveryoneCanReplyBtnSvg, PeopleMentionBtn, PeopleYouFollowBtn, PeopleYouFollowBtnSvg } from '../../../assets/inputfeedStyled';
import { IoEarthSharp } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiUserFollowLine } from 'react-icons/ri';
import { MdOutlineAlternateEmail } from 'react-icons/md';
export const CanReplyDropdown = () => {

    const { activeEveryone,
        setActiveEveryone,
        activePeopleFollow,
        setActivePeopleFollow,
        activePeopleMention,
        setActivePeopleMention
    } = useContext(content);

    const everyoneReplyCheck = () => {
        setActiveEveryone(true);
        setActivePeopleFollow(false);
        setActivePeopleMention(false);
        return console.log(activeEveryone)
    }

    const peopleYouFollowCheck = () => {
        setActiveEveryone(false);
        setActivePeopleFollow(true);
        setActivePeopleMention(false);
    }

    const peopleMentionCheck = () => {
        setActiveEveryone(false);
        setActivePeopleFollow(false);
        setActivePeopleMention(true);
    }
 
    return (
        <CanReplyDropDownSection>
            <article style={{ color:'white', padding:'15px 0 10px 10px', lineHeight:'20px', cursor:'text'}}>
                <p style={{fontSize:'17px', fontWeight:'700'}}>Who can reply?</p>
                <p style={{color:'gray', fontSize:'15.5px', fontWeight:'100'}}>Choose who can reply to this tweet.</p>
                <p style={{color: 'gray', fontSize:'15.5px', fontWeight:'100'}}>Anyone mentioned can always reply.</p>
            </article>

            <EveryoneCanReplyBtn onClick={everyoneReplyCheck}>
                <EveryoneCanReplyBtnSvg><IoEarthSharp style={{ color: 'white', fontSize: '18px' }} /></EveryoneCanReplyBtnSvg>
                <p style={{ color: 'white', fontWeight: '100', fontSize: '16px' }}>Everyone</p>
                { activeEveryone ? <AiOutlineCheck style={{position: 'absolute', right: '15px', color: 'rgb(5, 155, 240', fontSize: '18px' }}/> : null }
            </EveryoneCanReplyBtn>
            <PeopleYouFollowBtn onClick={peopleYouFollowCheck}>
                <PeopleYouFollowBtnSvg><RiUserFollowLine style={{ color: 'white', fontSize: '18px' }} /></PeopleYouFollowBtnSvg>
                <p style={{ color: 'white', fontWeight: '100', fontSize: '16px' }}>People you follow</p>
                { activePeopleFollow ? <AiOutlineCheck style={{position: 'absolute', right: '15px', color: 'rgb(5, 155, 240', fontSize: '18px' }}/> : null }
            </PeopleYouFollowBtn>
            <PeopleMentionBtn onClick={peopleMentionCheck}>
                <PeopleYouFollowBtnSvg><MdOutlineAlternateEmail style={{ color: 'white', fontSize: '20px' }} /></PeopleYouFollowBtnSvg>
                <p style={{ color: 'white', fontWeight: '100', fontSize: '16px' }}>Only people you mention</p>
                { activePeopleMention ? <AiOutlineCheck style={{position: 'absolute', right: '15px', color: 'rgb(5, 155, 240', fontSize: '18px' }}/> : null }
            </PeopleMentionBtn>
        </CanReplyDropDownSection>
    );
}