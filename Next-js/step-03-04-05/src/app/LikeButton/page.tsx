"use client";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const LikeButton = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return (
    <>
      <h1 className="flex justify-center w-full font-bold text-5xl text-red-500 mt-12">
        Like Button
      </h1>
      <br />
      {status ? (
        <AiFillHeart
          color="#ff6b81"
          size={50}
          className="flex justify-center w-full"
          onClick={toggle}
        />
      ) : (
        <AiOutlineHeart
          size={50}
          className="flex justify-center w-full"
          onClick={toggle}
        />
      )}
    </>
  );
};

export default LikeButton;
