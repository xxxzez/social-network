import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/Profile"
            render={() => 
            <Profile state={props.state.profilePage} />}
          />
          <Route
            path="/Dialogs"
            render={() => (
              <Dialogs state={props.state.dialogsPage} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
