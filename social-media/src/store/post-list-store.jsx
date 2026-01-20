import { Children, createContext, useReducer } from "react";
import Post from "../components/Post";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = (userId, title, body, reactions, tags) => {};

  const deletePost = (userId, title) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hy Friends Going to mumbai for vacations,Hope to enjoy a lot. Peace Out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacationa", "mumbai", "travel"],
  },
  {
    id: "2",
    title: "Pass ho gye",
    body: "4 sal ki mehnat rang layi, finally i have passed my exams",
    reactions: 15,
    userId: "user-12",
    tags: ["Exam", "graduation"],
  },
  {
    id: "3",
    title: "Fail ho gye",
    body: "4 sal ki mehnat rang layi, finally i have failed my exams",
    reactions: 15,
    userId: "user-8",
    tags: ["Exam", "graduation"],
  },
];
export default PostListProvider;
