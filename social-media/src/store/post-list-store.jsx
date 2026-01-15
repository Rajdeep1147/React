import { Children, createContext, useReducer } from "react";
import Post from "../components/Post";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {};

const PostListProvider = (children) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
