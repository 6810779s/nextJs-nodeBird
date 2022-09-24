import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Input } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { ADD_COMMENTS_REQUEST } from "../constants/post";
import styles from "../styles/CommentForm.module.scss";
import useInput from "../hooks/useInput";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const [comment, setComment, reset] = useInput({ comment: "" });
  const commentText = useRef(null);
  const id = useSelector((state) => state.user.me?.id);
  const { addCommentsDone } = useSelector((state) => state.post);
  useEffect(() => {
    if (addCommentsDone) {
      reset();
    }
  }, [addCommentsDone]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.comment) {
      dispatch({
        type: ADD_COMMENTS_REQUEST,
        data: {
          content: comment.comment,
          postId: post.id,
          userId: id,
        },
      });
    }
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
          name="comment"
          value={comment.comment}
          onChange={setComment}
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
