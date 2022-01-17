import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppLayout from "../components/AppLayout";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POST_REQUEST } from "../constants/post";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostLoading } = useSelector(
    (state) => state.post
  );
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !loadPostLoading && hasMorePosts) {
      dispatch({
        type: LOAD_POST_REQUEST,
      });
    }
  }, [inView]);

  return (
    <div>
      <AppLayout>
        {me && <PostForm />}
        {mainPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <div ref={ref}>{hasMorePosts && <Loading />}</div>
      </AppLayout>
    </div>
  );
};

export default Home;
