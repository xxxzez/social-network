import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://static.hltv.org/images/playerprofile/thumb/7998/800.jpeg?v=22"
        alt=""
      />
        { props.message }
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
