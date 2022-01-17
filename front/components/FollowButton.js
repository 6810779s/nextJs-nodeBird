import Button from "@material-ui/core/Button";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../constants/user";
import Loading from "./Loading";
import PropTypes from "prop-types";

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { followingLoading, unfollowingLoading, me } = useSelector(
    (state) => state.user
  );
  const isFollowing = me?.Followings.find((v) => v.id === post.User.id);
  console.log("isFollowing:", isFollowing);
  useEffect(() => {
    console.log();
  }, []);
  const followButtonClick = useCallback(() => {
    console.log("followingId:", isFollowing);
    if (!isFollowing) {
      dispatch({
        type: FOLLOW_REQUEST,
        data: { id: post.User.id, nickname: post.User.nickname },
      });
    } else {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: { id: post.User.id, nickname: post.User.nickname },
      });
    }
  }, [followingLoading, unfollowingLoading]);
  return (
    <Button onClick={followButtonClick}>
      {followingLoading || unfollowingLoading ? (
        <Loading />
      ) : isFollowing ? (
        "언팔로우"
      ) : (
        "팔로우"
      )}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default FollowButton;
