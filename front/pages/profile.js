import React, { useEffect, useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NickNameEditForm from "../components/NickNameEditForm";
import FollowList from "../components/FollowList";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import useSWR from "swr";
// import {
//   LOAD_FOLLOWERS_REQUEST,
//   LOAD_FOLLOWINGS_REQUEST,
// } from "../constants/user";
import axios from "axios";
import UserProfile from "../components/UserProfile";
const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);
const profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);
  const { data: followersData, error: followerError } = useSWR(
    `http://localhost:3065/user/followers?limit=${followersLimit}`,
    fetcher
  );
  const { data: followingsData, error: followingError } = useSWR(
    `http://localhost:3065/user/followings?limit=${followingsLimit}`,
    fetcher
  );

  // useEffect(() => {
  //   dispatch({ type: LOAD_FOLLOWERS_REQUEST });
  //   dispatch({ type: LOAD_FOLLOWINGS_REQUEST });
  // }, []);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  if (!me) {
    return "내정보 로딩중...";
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <div>팔로워/팔로잉중 에러가 발생합니다.</div>;
  }
  return (
    <>
      <Head>
        <title>profile | nodeBird</title>
      </Head>
      <AppLayout>
        <UserProfile />
        <NickNameEditForm />
        <FollowList
          header="팔로잉 목록"
          data={followingsData}
          onClickMore={loadMoreFollowings}
          loading={!followingsData && !followingError}
        />
        <FollowList
          header="팔로워 목록"
          data={followersData}
          onClickMore={loadMoreFollowers}
          loading={!followersData && !followerError}
        />
      </AppLayout>
    </>
  );
};

export default profile;
