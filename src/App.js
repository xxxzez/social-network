import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

const App = (props) => {
    debugger
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route
                    path="/Profile"
                    render={() => (
                        <Profile
                            profilePage={props.state.profile}
                            dispatch={props.dispatch}
                        />
                    )}
                />
                <Route
                    path="/Dialogs"
                    render={() => <Dialogs store={props.store} />}
                />
            </div>
        </div>
    );
};

export default App;
