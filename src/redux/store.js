import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "I am ready", likesCount: 12 },
                { id: 2, message: "Dziga laventus", likesCount: 12 },
                { id: 3, message: "Data analyst", likesCount: 12 },
                { id: 4, message: "Happy birthday", likesCount: 12 },
                { id: 5, message: "Call me later", likesCount: 12 },
                { id: 6, message: "Перезвони когда сможешь", likesCount: 12 },
            ],
            newPostText: "it-kamsutra.com",
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "I am ready" },
                { id: 2, message: "Dziga laventus" },
                { id: 3, message: " analyst" },
                { id: 4, message: "Happy birthday" },
                { id: 5, message: "Call me later" },
                { id: 6, message: "Перезвони когда сможешь" },
            ],
            dialogs: [
                { id: 1, name: "Matvei" },
                { id: 2, name: "Yuliya" },
                { id: 3, name: "Nika" },
                { id: 4, name: "s1mple" },
                { id: 5, name: "electronic" },
                { id: 6, name: "boombl4" },
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(
            this._state.profilePage,
            action
        );
        this._state.dialogsPage = dialogsReducer(
            this._state.dialogsPage,
            action
        );
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
