import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../../components/AppLayout";
import { LOAD_USER_POSTS_REQUEST } from "../../constants/post";
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from "../../constants/user";
import wrapper from "../../store/configureStore";
import axios from "axios";
import { END } from "redux-saga";
import Head from "next/head";
import {
  Avatar,
  Divider,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PostCard from "../../components/PostCard";
import Loading from "../../components/Loading";
import UserProfile from "../../components/UserProfile";
import styles from "../../styles/userPosts.module.scss";
const useStyles = makeStyles({
  profileWrap: { maxWidth: "500px", margin: "auto", padding: "30px" },
  typographyBox: { width: "55px", background: "#E6E6E6", textAlign: "center" },
  cardLayout: {
    maxWidth: "400px",
    margin: "20px auto",
  },
});

const User = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { userInfo } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostLoading } = useSelector(
    (state) => state.post
  );
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
    unobserveOnEnter: true,
    delay: 1000,
    trackVisibility: true,
  });
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (inView && !loadPostLoading && hasMorePosts) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        lastId,
        data: id,
      });
    }
  }, [inView]);
  console.log("userInfo:", userInfo);
  console.log("mainPosts:", mainPosts);
  return (
    <AppLayout>
      <div className={styles.container}>
        <div className={styles.wrap}>
          {userInfo && (
            <Head>
              <title>{userInfo.nickname}님의 글</title>
              <meta
                name="description"
                content={`${userInfo.nickname}님의 게시글`}
              />
              <meta
                property="og:title"
                content={`${userInfo.nickname}님의 게시글`}
              />
              <meta
                property="og:description"
                content={`${userInfo.nickname}님의 게시글`}
              />
              {/* <meta property="og:image" content={singlePost.Images[0]?singlePost.Images[0].src:"https://nodebird.com/favicon.icon"}/>
        <meta property="og:url" content={`https://nodebird.com/user/${id}`}/> */}
            </Head>
          )}
          {userInfo ? <UserProfile info={userInfo} /> : ""}
          {mainPosts.map((post) => (
            // <PostCard post={post} key={post.id} />
            <React.Fragment key={post.id}>
              <PostCard post={post} />
              {post.id === mainPosts[mainPosts.length - 1]?.id &&
              hasMorePosts ? (
                <div ref={ref}>
                  <Loading />
                </div>
              ) : (
                ""
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({ type: LOAD_MY_INFO_REQUEST });
    context.store.dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: context.params.id,
    });
    context.store.dispatch({
      type: LOAD_USER_REQUEST,
      data: context.params.id,
    });
    ``;
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default User;
