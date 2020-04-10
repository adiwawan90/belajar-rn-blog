// import createDataContext from './createDataContext';
import React, {useReducer} from 'react';

const BlogContext = React.createContext();

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

// const addBlogPost = (dispatch) => {
//     return () => {
//         dispatch({ type: 'add_blogpost'});
//     }
// };

export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' })
    }

    return (
        <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
}



// export const { Context, Provider } = createDataContext(
//     blogReducer, 
//     {addBlogPost}, 
//     []
// );

export default BlogContext;