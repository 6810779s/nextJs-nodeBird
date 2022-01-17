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
import React, { useState, useCallback } from "react";
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
import { REMOVE_POST_REQUEST } from "../constants/post";
import Loading from "./Loading";
import FollowButton from "./FollowButton";

const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  const { removePostLoading } = useSelector((state) => state.post);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = me?.id; // 이문법과 같음 me && me.id
  const UIid = open ? "simple-popover" : undefined;
  const [liked, setLiked] = useState(false);
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
    dispatch({ type: REMOVE_POST_REQUEST, data: post.id });
  }, []);
  return (
    <div style={{ marginBottom: 30 }}>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="userImg">{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          action={
            <IconButton
              aria-label="more"
              aria-describedby={UIid}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
          }
          subheader={me && <FollowButton post={post} />}
        />
        <CardMedia style={{ margin: "auto" }}>
          {post.Images[0] && <PostImages images={post.Images} />}
        </CardMedia>
        <CardContent>
          <PostCardContent postData={post.content} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="retweet">
            <RepeatIcon />
          </IconButton>
          <IconButton
            aria-label="add to favorite"
            onClick={useCallback(() => {
              setLiked((prev) => !prev); //false는 true로, true는 false로
            }, [liked])}
          >
            {liked ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton aria-label="comment" onClick={onToggleComment}>
            <TextsmsIcon />
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
                  <Avatar>{data.User.nickname[0]}</Avatar>
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
  }).isRequired,
};

export default PostCard;
