import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Input } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { ADD_COMMENTS_REQUEST } from "../constants/post";
import styles from "../styles/CommentForm.module.scss";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const commentText = useRef(null);
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentsDone } = useSelector((state) => state.post);
  useEffect(() => {
    if (addCommentsDone) {
      setComment("");
    }
  }, [addCommentsDone]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (data.get("commentInput")) {
      dispatch({
        type: ADD_COMMENTS_REQUEST,
        data: {
          content: data.get("commentInput"),
          postId: post.id,
          userId: id,
        },
      });
    }
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <Input
          style={{ flex: 1 }}
          id="commentInput"
          name="commentInput"
          value={comment}
          onChange={onChangeComment}
          placeholder="댓글 달기..."
          type="text"
          ref={commentText}
        />
        <Button type="submit" className={styles.addCommentBtn}>
          게시
        </Button>
      </Box>
    </>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
