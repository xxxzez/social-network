const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "I am ready", likesCount: 12 },
        { id: 2, message: "Dziga laventus", likesCount: 12 },
        { id: 3, message: "Data analyst", likesCount: 12 },
        { id: 4, message: "Happy birthday", likesCount: 12 },
        { id: 5, message: "Call me later", likesCount: 12 },
        { id: 6, message: "Перезвони когда сможешь", likesCount: 12 },
    ],
    newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export default profileReducer;
