import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postsList: [],
    showModal: false,
}
export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, newPost) => {
            state.postsList = [newPost.payload, ...state.postsList];
        },
        removePost: (state, action) => {
            const itemId = action.payload;
            state.postsList = state.postsList.filter((post) => post.id !== itemId)
        },
        setShowModal: (state, action) => {
            state.showModal = action.payload; 
        }  
    }

} )
export const { addPost, removePost, setShowModal} = postSlice.actions;

export default postSlice.reducer;