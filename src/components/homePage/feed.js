import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Post } from "../post";
import { InputFeed } from "./InputFeed";
import { WiSunrise } from "react-icons/wi";
import {
  Feed,
  PostInput,
  TopPostInput,
  Title,
  TopTweets,
  DropDownBtn,
  TweetsPosts,
} from "../../assets/feedStyled";
import { TopTweetsDD } from "./dropdowns/toptweetsdropdown";

export const FeedPage = () => {
  const feedRef = useRef();
  const tweetsPostsRef = useRef();
  const topTweetBtn = useRef();
  const [showDropDown, setShowDropDown] = useState(false);
  const textAreaInput = useSelector((state) => state.posts.textAreaInput);
  const posts = useSelector((state) => state.posts.postsList);

  const openMenu = () => {
    return setShowDropDown(true);
  };

  useEffect(() => {}, [textAreaInput]);

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.path[1].tagName !== "BUTTON") {
        setShowDropDown(false);
      }
    };
    document.body.addEventListener("click", closeMenu);

    return () => document.body.removeEventListener("click", closeMenu);
  }, []);

  return (
    <React.StrictMode>
      <Feed ref={feedRef}>
        <PostInput>
          <TopPostInput>
            <Title>
              <h5>Home</h5>
            </Title>
            <TopTweets ref={topTweetBtn} onClick={openMenu}>
              <DropDownBtn type="submit">
                <WiSunrise style={{ color: "white" }} />
              </DropDownBtn>
              {showDropDown ? <TopTweetsDD /> : null}
            </TopTweets>
          </TopPostInput>
          <InputFeed posts={posts}></InputFeed>
          <TweetsPosts ref={tweetsPostsRef} className="tweets-posts">
            {posts ? (
              posts.map((item) => {
                const { content, username, logo, id } = item;
                return (
                  <Post
                    id={id}
                    username={username}
                    logo={logo}
                    content={content}
                    />
                );
              })
            ) : (
              <div></div>
            )}
          </TweetsPosts>
        </PostInput>
      </Feed>
    </React.StrictMode>
  );
};
