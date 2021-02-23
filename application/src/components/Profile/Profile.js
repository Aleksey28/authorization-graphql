import React from "react";
import classes from "./Profile.module.css";

function Profile ({userData}) {
  return (
    <div className={classes.profile}>
      <div className={classes.container}>
        <img className={classes.avatar} src={userData.avatar} alt="User's avatar"/>
        <p className={classes.text}>Email: {userData.email}</p>
        <p className={classes.text}>Имя: {userData.firstName}</p>
        <p className={classes.text}>Фамилия: {userData.secondName}</p>
        <p className={classes.text}>Возраст: {userData.age}</p>
      </div>
    </div>
  )
}

export default Profile;
