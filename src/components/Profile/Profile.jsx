import React from "react";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} 
               newPostText={props.profilePage.newPostText} 
               dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
