import React, { useState, useRef, useEffect } from "react";
import { PostDropDown } from "./dropdowns/postdropdown";
import { MdMoreHoriz, MdOutlineQuickreply } from "react-icons/md";
import { AiOutlineRetweet, AiFillHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import {
  ContentInput,
  IconsComment,
  IconsHeart,
  IconsRetweet,
  IconsUpload,
  PostContent,
  PostIconsComment,
  PostIconsHeart,
  PostIconsRetweet,
  PostIconsUpload,
  PostNum,
  PostSocial,
  TweetContent,
  TweetDetails,
  TweetMore,
  TweetMoreBtn,
  TweetProfileLogo,
  TweetUsername,
} from "../assets/postStyled";

export const Post = ({ id, logo, username, content }) => {
  const moreBtn = useRef();
  const [showPostDropDown, setShowPostDropDown] = useState(false);
  const [retweet, setReTweet] = useState(0);
  const [comment, setComment] = useState(0);
  const [like, setLike] = useState(0);
  const [activeLike, setActiveLike] = useState(false);
  const [activeComment, setActiveComment] = useState(false);
  const [activeReTweet, setActiveReTweet] = useState(false);

  const closeDropDown = (e) => {
    if (e.path[2] !== moreBtn.current) {
      setShowPostDropDown(false);
    } 
  }

  const handleComment = () => {
    setActiveComment(!activeComment);
    setComment((prev) => (activeComment ? prev - 1 : prev + 1));
  };

  const handleLike = () => {
    setActiveLike(!activeLike);
    setLike((prev) => (activeLike ? prev - 1 : prev + 1));
    console.log(id);
  };

  const handleRetweet = () => {
    setActiveReTweet(!activeReTweet);
    setReTweet((prev) => (activeReTweet ? prev - 1 : prev + 1));
  };

  useEffect(() => {
    document.body.addEventListener('click', closeDropDown);

    return () => document.body.removeEventListener('click', closeDropDown);
  }, [])

  return (
    <TweetContent>
      <TweetDetails>
        <TweetProfileLogo>{logo}</TweetProfileLogo>
        <PostContent>
          <TweetUsername>
            <p>{username}</p>
          </TweetUsername>
          <ContentInput>{content}</ContentInput>
        </PostContent>
        <TweetMore ref={moreBtn}>
          <TweetMoreBtn  onClick = {() => setShowPostDropDown(true)}>
            <MdMoreHoriz />
            { showPostDropDown ? <PostDropDown id={id} /> : null }
          </TweetMoreBtn>
        </TweetMore>
      </TweetDetails>
      <PostSocial>
        <ul>
          <li onClick={handleComment}>
            <PostIconsComment>
              <IconsComment>
                <MdOutlineQuickreply />
              </IconsComment>
              <PostNum>{comment}</PostNum>
            </PostIconsComment>
          </li>
          <li onClick={handleRetweet}>
            <PostIconsRetweet>
              <IconsRetweet>
                <AiOutlineRetweet />
              </IconsRetweet>
              <PostNum>{retweet}</PostNum>
            </PostIconsRetweet>
          </li>
          <li onClick={handleLike}>
            <PostIconsHeart>
              <IconsHeart active={activeLike}>
                <AiFillHeart />
              </IconsHeart>
              <PostNum like={activeLike}>{like}</PostNum>
            </PostIconsHeart>
          </li>
          <li >
            <PostIconsUpload>
              <IconsUpload>
                <BsUpload />
              </IconsUpload>
            </PostIconsUpload>
          </li>
        </ul>
      </PostSocial>
    </TweetContent>
  );
};
