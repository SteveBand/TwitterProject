import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../redux/mainglobal";
import { MainPageNav } from "../components/navbar";
import { FeedPage } from "../components/homePage/feed";
import { TweetModal } from "../components/homePage/tweetmodal";
import { Trends } from "../components/homePage/trends";

export const HomePage = () => {
  const showModal = useSelector((state) => state.posts.showModal);
  const posts = useSelector((state) => state.posts.postsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowModal(false));
  }, [posts]);

  useEffect(() => {}, [showModal]);
  return (
    <React.StrictMode>
      <div className="main-page">
        <MainPageNav />
        <FeedPage />
        <Trends />
        {showModal ? <TweetModal /> : null}
      </div>
    </React.StrictMode>
  );
};
