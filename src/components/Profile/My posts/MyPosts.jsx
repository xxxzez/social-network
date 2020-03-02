import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "I am ready", likesCount: 12 },
    { id: 2, message: "Dziga laventus", likesCount: 12 },
    { id: 3, message: "Data analyst", likesCount: 12 },
    { id: 4, message: "Happy birthday", likesCount: 12 },
    { id: 5, message: "Call me later", likesCount: 12 },
    { id: 6, message: "Перезвони когда сможешь", likesCount: 12 }
  ];

  let postsElements = posts.map(p => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea name="" id=""></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
