import createDataContext from './createDataContext';
// import React, {useReducer} from 'react';

// menambahkan use reducer
// 1. buat func reducer
const blogReducer = (state, action) => {
    switch(action.type){
        case 'edit_blogPost':
            return  state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })
        case 'add_blogpost':
            return [
                ...state, {
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                    }
            ];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: {title, content}});
        if (callback) {
            callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
};

const editBlogPost= (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({
            type: 'edit_blogPost',
            payload: { id: id, title: title, content: content}
        });
        if (callback) {
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost}, 
    [{ title: 'TEST', content: 'SAY', id: 1}]
);
