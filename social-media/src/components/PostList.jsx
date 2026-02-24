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
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.products);
        setFetching(false);
      });
    return () => {
      console.log("Cleanup done!");
      controller.abort();
    };
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
