import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../redux/mainglobal";
import { InputFeed } from "./InputFeed";
import { ModalBg, ModalBox, ModalContainer } from "../../assets/modalStyled";
import { AiOutlineClose } from "react-icons/ai";
import { CloseBtn } from "../closeBtn";

export const TweetModal = () => {
  const dispatch = useDispatch();
  const modalbox = useRef();

  const closeModal = (e) => {
    if (!modalbox.current.contains(e.target)) {
      dispatch(setShowModal(false));
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", closeModal);

    return () => document.body.removeEventListener("click", closeModal);
  }, []);

  return ReactDOM.createPortal(
    <ModalBg>
      <ModalBox ref={modalbox}>
        <CloseBtn
          padding={"5px"}
          color={"white"}
          margin={"15px 0 0 15px"}
          SVGElement={<AiOutlineClose />}
        />
        <ModalContainer>
          <InputFeed />
        </ModalContainer>
      </ModalBox>
    </ModalBg>,
    document.body
  );
};
