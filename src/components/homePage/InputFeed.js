import React, { useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/mainglobal";
import {
  NetSee,
  Profile,
  ProfileLogo,
  Input,
  TextArea,
  InputCanReplay,
  InputUpload,
  TweetBtnFeedContainer,
  TweetBtnFeed,
  Hidden,
} from "../../assets/inputfeedStyled";
import { NetSeeDropdown } from "./dropdowns/netseedropdown";
import { CanReplyDropdown } from "./dropdowns/canreplydropdown";
import { MdAccountCircle, MdOutlinePlace } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { GiEarthAmerica } from "react-icons/gi";
import { BsCardImage, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";

export const InputFeed = ({ setShowModal }) => {
  const textField = useRef();
  const inputExpand = useRef();
  const everyoneBtn = useRef();
  const canReply = useRef();
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCanReply, setShowCanReply] = useState(false);
  const [textAreaInput, setTextAreaInput] = useState("");
  const posts = useSelector((state) => state.posts.postsList);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const newPost = {
      id: nanoid(),
      content: textAreaInput,
      username: "username",
      logo: <MdAccountCircle />,
      comments: [{
        id: nanoid(),
        user: 'username',
        logo: <MdAccountCircle />,
        content: '',
        likes: 0,
        replies: 0,
      }]
    };
    await dispatch(addPost(newPost))((textField.current.value = ""));
    setShowModal(false);
  };

  const handleTextArea = () => {
    textField.current.style.height = `50px`;
    inputExpand.current.style.height = "50px";
    let height = textField.current.scrollHeight;
    textField.current.style.height = `${height}px`;
    inputExpand.current.style.height = `${height}px`;
  };

  const openDropDown = () => {
    setShowDropDown(true);
  };

  const openCanReply = () => {
    setShowCanReply(true);
  };

  useEffect(() => {
    setTextAreaInput("");
  }, [posts]);

  useEffect(() => {}, [textAreaInput]);

  useEffect(() => {
    const closeDropDown = (e) => {
      if (e.path[1] !== everyoneBtn.current) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("click", closeDropDown);

    return () => document.removeEventListener("click", closeDropDown);
  }, []);

  useEffect(() => {
    const closeReplyDropDown = (e) => {
      if (e.path[1] !== canReply.current) {
        setShowCanReply(false);
      }
    };
    document.addEventListener("click", closeReplyDropDown);

    return () => document.removeEventListener("click", closeReplyDropDown);
  }, []);

  return (
    <Profile>
      <ProfileLogo>
        <MdAccountCircle style={{ color: "rgb(157, 156, 156)" }} />
      </ProfileLogo>
      <NetSee ref={everyoneBtn} onClick={openDropDown}>
        <p>Everyone</p>
        <FiChevronDown />
      </NetSee>
      {showDropDown ? <NetSeeDropdown /> : null}
      <Input ref={inputExpand} minHeight={50} maxHeight={200}>
        <form>
          <TextArea
            maxHeight={190}
            ref={textField}
            type="text"
            placeholder="Whats hapenning"
            maxLength="200"
            onKeyUp={() => {
              handleTextArea();
            }}
            onChange={(e) => {
              setTextAreaInput(e.target.value);
            }}
          />
        </form>
      </Input>
      <InputCanReplay ref={canReply} onClick={openCanReply}>
        <GiEarthAmerica style={{ fontSize: "16px" }} />
        <p>Everyone can reply</p>
        {showCanReply ? <CanReplyDropdown /> : null}
      </InputCanReplay>
      <InputUpload>
        <div>
          <ul>
            <li>
              <BsCardImage />
            </li>
            <li>
              <AiOutlineFileGif />
            </li>
            <Hidden>
              <BiPoll />
            </Hidden>
            <li>
              <BsEmojiSmile />
            </li>
            <Hidden>
              <AiOutlineSchedule />
            </Hidden>
            <li>
              <MdOutlinePlace />
            </li>
          </ul>
        </div>
        <TweetBtnFeedContainer>
          <TweetBtnFeed onClick={handleSubmit}>tweet</TweetBtnFeed>
        </TweetBtnFeedContainer>
      </InputUpload>
    </Profile>
  );
};
