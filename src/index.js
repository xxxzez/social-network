import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: 1, message: "I am ready", likesCount: 12 },
  { id: 2, message: "Dziga laventus", likesCount: 12 },
  { id: 3, message: "Data analyst", likesCount: 12 },
  { id: 4, message: "Happy birthday", likesCount: 12 },
  { id: 5, message: "Call me later", likesCount: 12 },
  { id: 6, message: "Перезвони когда сможешь", likesCount: 12 }
];

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

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
