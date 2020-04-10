import createDataContext from './createDataContext';
import React, {useReducer} from 'react';

// menambahkan use reducer
// 1. buat func reducer
const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title: `Blog Post #${state.length}`}];
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost'});
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost}, 
    []
);
