import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.name;

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = props => {

  let dialogs = [
    { id: 1, name: "Matvei" },
    { id: 2, name: "Yuliya" },
    { id: 3, name: "Nika" },
    { id: 4, name: "s1mple" },
    { id: 5, name: "electronic" },
    { id: 6, name: "boombl4" }
  ];


  let messages = [
    { id: 1, message: "I am ready" },
    { id: 2, message: "Dziga laventus" },
    { id: 3, message: " analyst" },
    { id: 4, message: "Happy birthday" },
    { id: 5, message: "Call me later" },
    { id: 6, message: "Перезвони когда сможешь" }
  ];
  
  
  let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

  let messageElements = messages.map ( m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messageElements }
      </div>
    </div>
  );
};

export default Dialogs;
