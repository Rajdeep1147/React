import { act, Children, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addIntialPosts: () => {},
  getPerticularProduct: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  }
  if (action.type === "ADD_POST") {
    const newPost = action.payload;
    newPostList = [newPost, ...currPostList];
    return newPostList;
  }
  if (action.type === "ADD_INITIAL_POSTS") {
    return action.payload.posts;
  }
  if (action.type === "GET_PERTICULAR_POST") {
    return currPostList.find((post) => post.id === action.payload.postId);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (
    postTitle,
    postBody,
    postUserId,
    postReactions,
    postTags,
  ) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: String(Date.now()),
        title: postTitle,
        body: postBody,
        userId: postUserId,
        reactions: postReactions,
        tags: postTags,
      },
    });
  };

  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const getPerticularProduct = (postId) => {
    dispatchPostList({
      type: "GET_PERTICULAR_POST",
      payload: {
        postId,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addIntialPosts,
        getPerticularProduct,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
