import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className='wrapper'>
      <div>
        <img src="https://csgoluxe.ru/wp-content/uploads/2019/01/katowice.jpg" alt="" />
      </div>
      <div className={s.descriptionBlock}><h2>IEM Katowice 2019</h2></div>
    </div>
  );
};

export default ProfileInfo;
