import React from 'react';
import { useDispatch} from 'react-redux';
import { removePost } from '../../redux/mainglobal';
import { BlockBtn, EmbedBtn, IntresBtn, ListBtn, MuteBtn, PostMoreDropDown, ReportBtn, UnfollowBtn } from '../../assets/postStyled';
import {BsEmojiFrown, BsPersonX, BsCardList, BsMicMute, BsFlag} from 'react-icons/bs'
import { BiBlock } from 'react-icons/bi';
import { ImEmbed2 } from 'react-icons/im';

export const PostDropDown = ({id}) => {
    const dispatch = useDispatch();

    return (
        <PostMoreDropDown>
            <IntresBtn onClick={() => dispatch(removePost(id))}>
                <div style={{padding:'0 10px 0 20px', fontSize:'18px', margin:'0 0 -5px 0'}}><BsEmojiFrown/></div>
                <div style={{color:'white', fontSize:'15.5px'}}><p>Not interested in this Tweet</p></div>
            </IntresBtn>
            <UnfollowBtn>
                <div style={{padding:'0 10px 0 20px', fontSize:'20px', margin:'0 0 -5px 0'}}><BsPersonX /></div>
                <div style={{color:'white', fontSize:'15.5px'}}><p>Unfollow UserName</p></div>
            </UnfollowBtn>
            <ListBtn>
                <div style={{padding:'0 10px 0 20px', fontSize:'20px', margin:'0 0 -5px 0'}}><BsCardList /></div>
                <div style={{color:'white', fontSize:'15.5px'}}><p>Add/remove user from Lists</p></div>
            </ListBtn>
            <MuteBtn>
                <div style={{padding:'0 10px 0 20px', fontSize:'20px', margin:'0 0 -5px 0'}}><BsMicMute /></div>
                <div style={{color:'white', fontSize:'15.5px'}}><p>Mute User</p></div>
            </MuteBtn>
            <BlockBtn>
                <div style={{padding:'0 10px 0 20px', fontSize:'20px', margin:'0 0 -5px 0'}}><BiBlock /></div>
                <div style={{color:'white', fontSize:'15.5px'}}><p>Block User</p></div>
            </BlockBtn>
            <EmbedBtn>
                <div style={{padding:'0 10px 0 20px', fontSize:'20px', margin:'0 0 -5px 0'}}><ImEmbed2 /></div>
                <div style={{color:'white', fontSize:'15.5px'}}><p>Embed Tweet</p></div>
            </EmbedBtn>
            <ReportBtn>
                <div style={{padding:'0 10px 0 20px', fontSize:'20px', margin:'0 0 -5px 0'}}><BsFlag /></div>
                <div style={{color:'white', fontSize:'15.5px'}}><p>Report Tweet</p></div>
            </ReportBtn>
        </PostMoreDropDown>
    );
}