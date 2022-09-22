import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppLayout from "../components/AppLayout";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POSTS_REQUEST } from "../constants/post";
import { LOAD_MY_INFO_REQUEST } from "../constants/user";
import { useInView } from "react-intersection-observer";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import styles from "../styles/Home.module.scss";
const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostLoading, retweetFailure } =
    useSelector((state) => state.post);
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
    unobserveOnEnter: true,
    delay: 1000,
    trackVisibility: true,
  });

  useEffect(() => {
    if (retweetFailure) {
      alert(retweetFailure);
    }
  }, [retweetFailure]);

  // useEffect(() => {
  //   dispatch({ type: LOAD_MY_INFO_REQUEST });
  //   dispatch({
  //     type: LOAD_POST_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (inView && !loadPostLoading && hasMorePosts) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POSTS_REQUEST,
        lastId,
      });
    }
  }, [inView]);

  return (
    <AppLayout>
      <div className={styles.container}>
        <h3>Home</h3>
        {me && <PostForm />}

        {mainPosts.map((post) => (
          // <PostCard post={post} key={post.id} />
          <React.Fragment key={post.id}>
            <PostCard post={post} />
            {post.id === mainPosts[mainPosts.length - 1]?.id && hasMorePosts ? (
              <div ref={ref}>
                <Loading />
              </div>
            ) : (
              ""
            )}
          </React.Fragment>
        ))}
      </div>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log("getServerSideProps start");
    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : "";
    // axios.defaults.headers.Cookie = cookie; //서버쪽으로 쿠키전달
    //위 두 줄만 입력할 경우, 쿠키가 공유되므로 아래 코드를 작성해줘야됨.
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({ type: LOAD_MY_INFO_REQUEST });
    context.store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });

    //아래 코드는 next redux에서 그렇게 하라고 되어 있음.
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
