import React, { useEffect, useState } from 'react';
import { EveryoneBtn, EveryoneBtnSvg, NetSeeDropDownSection, TwitterCircleBtn, TwitterCircleBtnSvg } from '../../../assets/inputfeedStyled';
import { IoEarthSharp } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai';
import { RiUserHeartFill } from 'react-icons/ri';
export const NetSeeDropdown = () => {
    const [everyoneCheck, setEveryoneCheck] = useState(true);
    const [twitterCircle, setTwitterCircle] = useState(false);
    const [twitterCirclePeople, setTwitterCirclePeople] = useState(0);

    const handleEveryoneCheck = () => {
        setEveryoneCheck(true);
        setTwitterCircle(false);
    }

    const handleTwitterCircle = () => {
        setTwitterCircle(true);
        setEveryoneCheck(false);
    }


    return (
        <NetSeeDropDownSection style={{color:'white'}}>
            <p style={{margin:'15px 5px 0 15px', fontSize:'22px', fontWeight:600}}>Choose audience</p>
            <EveryoneBtn onClick={handleEveryoneCheck}>
                <EveryoneBtnSvg ><IoEarthSharp style={{ fontSize: '18px'}} /></EveryoneBtnSvg>
                <p style={{ paddingLeft: '10px', fontSize: '15px'}}>Everyone</p>
                { everyoneCheck ? <AiOutlineCheck style={{ position: 'absolute', right: '15px', color: 'rgb(5, 155, 240', fontSize: '18px' }}/> : null }
            </EveryoneBtn>
            <TwitterCircleBtn onClick={handleTwitterCircle}>
                <TwitterCircleBtnSvg><RiUserHeartFill style={{ fontSize: '20px', fill: 'white'}} /></TwitterCircleBtnSvg>
                <div>
                    <p style={{paddingLeft:'10px', fontSize:'15px'}}>Twitter Circle</p>
                    <div style={{ display: 'flex' }}>
                        <p style={{ padding: '0 5px 0 10px'}}>{twitterCirclePeople}</p>
                        <p style={{ padding: '0 10px 0 0px', fontSize: '14px', color: 'gray' }}>People</p>
                        <button style={{ backgroundColor: 'transparent', border: 'none', color: 'white', borderBottom: '1px solid white', cursor: 'pointer' }}>
                            Edit
                        </button>
                    </div>
                </div>
                { twitterCircle ? <AiOutlineCheck style={{ position:'absolute', right:'15px', color:'rgb(5, 155, 240)', fontSize:'18px'}} /> : null }
            </TwitterCircleBtn>
        </NetSeeDropDownSection>
    );
}