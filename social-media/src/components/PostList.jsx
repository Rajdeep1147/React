import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpin from "./LoadingSpin";

const PostList = () => {
  const { postList = [], addIntialPosts } = useContext(PostListData);
  const [fetchIntialPosts, setFetchInitialPosts] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.products);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpin />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}

      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
