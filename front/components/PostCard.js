import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover,
  Typography,
} from "@material-ui/core";
import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TextsmsIcon from "@material-ui/icons/Textsms";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch, useSelector } from "react-redux";
import PostImages from "./PostImages";
import ListSubheader from "@material-ui/core/ListSubheader";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import {
  REMOVE_POST_REQUEST,
  LIKE_BUTTON_REQUEST,
  UNLIKE_BUTTON_REQUEST,
  RETWEET_REQUEST,
} from "../constants/post";
import Loading from "./Loading";
import FollowButton from "./FollowButton";
import Link from "next/link";
import moment from "moment";
import styles from "../styles/PostCard.module.scss";

moment.locale("ko");

const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  const { removePostLoading } = useSelector((state) => state.post);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = me?.id; // 이문법과 같음 me && me.id
  const UIid = open ? "simple-popover" : undefined;
  const [comment, setComment] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onToggleComment = () => {
    setComment((prev) => !prev);
  };

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({ type: REMOVE_POST_REQUEST, data: post.id });
  }, [id]);

  const onUnlike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({ type: UNLIKE_BUTTON_REQUEST, data: post.id });
  }, [id]);
  const onLike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({ type: LIKE_BUTTON_REQUEST, data: post.id });
  }, [id]);
  const OnRetweet = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({ type: RETWEET_REQUEST, data: post.id });
  }, [id]);

  const liked = post.Likers.find((v) => v.id === id);

  return (
    <div className={styles.container}>
      <Card>
        <CardHeader
          avatar={
            <Link href={`/user/${post.User.id}`}>
              <a>
                <Avatar aria-label="userImg">{post.User.nickname[0]}</Avatar>
              </a>
            </Link>
          }
          title={
            <>
              <Link href={`/user/${post.User.id}`}>
                <a>{post.User.nickname}</a>
              </Link>
              <div>{moment(post.createdAt).fromNow()}</div>
            </>
          }
          action={
            <div className={styles.moreMenuContainer}>
              <div>{me && <FollowButton post={post} />}</div>
              <IconButton
                aria-label="more"
                aria-describedby={UIid}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                <MoreHorizIcon className={styles.moreMenuIcon} />
              </IconButton>
            </div>
          }
          // subheader={me && <FollowButton post={post} />}
        />
        <CardMedia style={{ margin: "auto" }}>
          {post.Images[0] && <PostImages images={post.Images} />}
        </CardMedia>

        {/* 리트윗 게시물 */}
        {post.RetweetId && post.Retweet ? (
          <Card>
            <div style={{ float: "right" }}>
              {moment(post.createdAt).format("YYYY.MM.DD")}
            </div>
            <CardHeader
              avatar={
                <Link href={`/user/${post.User.id}`}>
                  <a>
                    <Avatar aria-label="userImg">
                      {post.Retweet.User.nickname[0]}
                    </Avatar>
                  </a>
                </Link>
              }
              title={post.Retweet.User.nickname}
            />
            <CardMedia style={{ margin: "auto" }}>
              {post.Retweet.Images[0] && (
                <PostImages images={post.Retweet.Images} />
              )}
            </CardMedia>
            <CardContent>
              <PostCardContent postData={post.Retweet.content} />
            </CardContent>
          </Card>
        ) : (
          <CardContent>
            <PostCardContent postData={post.content} />
          </CardContent>
        )}

        <CardActions disableSpacing>
          <IconButton aria-label="retweet" onClick={OnRetweet}>
            <RepeatIcon className={styles.repearIcon} />
          </IconButton>
          {liked ? (
            <IconButton aria-label="add to favorite" onClick={onUnlike}>
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
          ) : (
            <IconButton aria-label="add to favorite" onClick={onLike}>
              <FavoriteBorderIcon />
            </IconButton>
          )}
          <IconButton aria-label="comment" onClick={onToggleComment}>
            <TextsmsIcon className={styles.commentIcon} />
          </IconButton>
        </CardActions>
        <Popover
          id={UIid}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <ButtonGroup>
            {id && post.User.id === id ? (
              <>
                <Button>수정</Button>
                <Button onClick={onRemovePost}>
                  {removePostLoading ? <Loading /> : "삭제"}
                </Button>
              </>
            ) : (
              <Button>신고</Button>
            )}
          </ButtonGroup>
        </Popover>
        {/* <Image />
        <Content />
        <Button></Button> */}
      </Card>
      {comment && (
        <div>
          <CommentForm post={post} />

          <List
            subheader={
              <ListSubheader>{post.Comments.length}개의 댓글</ListSubheader>
            }
          >
            {post.Comments.map((data) => (
              <ListItem>
                <ListItemAvatar>
                  <Link href={`/user/${data.User.id}`}>
                    <a>
                      <Avatar>{data.User.nickname[0]}</Avatar>
                    </a>
                  </Link>
                </ListItemAvatar>
                <ListItemText
                  primary={data.User.nickname}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        {data.content}
                      </Typography>
                      {/* {" — I'll be in your neighborhood doing errands this…"} */}
                    </React.Fragment>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
