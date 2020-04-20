const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
};


export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});
export default dialogsReducer;
