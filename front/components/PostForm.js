import { Box, Button, Input, TextareaAutosize } from "@material-ui/core";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_POST_REQUEST,
  REMOVE_IMAGE,
  UPLOAD_IMAGES_REQUEST,
} from "../constants/post";
import { addPost } from "../reducers/post";
import styles from "../styles/PostForm.module.scss";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import useInput from "../hooks/useInput";
const PostForm = () => {
  const dispatch = useDispatch();
  //   const imageInput = useRef();
  const [textAreaValue, setTextAreaValue, reset] = useInput({ text: "" });
  const { imagePaths, addPostDone } = useSelector((state) => state.post);

  useEffect(() => {
    if (addPostDone) {
      reset();
    }
  }, [addPostDone]);
  const imageInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    imagePaths.forEach((i) => {
      formData.append("image", i);
    });

    formData.append("content", textAreaValue.text);

    if (textAreaValue.text !== "" || imagePaths.length !== 0) {
      return dispatch(addPost(formData));
    }
    if (textAreaValue.text == "") {
      alert("내용을 입력하세요.");
    }
  };

  const onChangeImage = useCallback((e) => {
    const imageFormData = new FormData();

    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });
    dispatch({ type: UPLOAD_IMAGES_REQUEST, data: imageFormData });
  });

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onRemoveImage = useCallback((index) => () => {
    dispatch({ type: REMOVE_IMAGE, data: index });
  });

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <div className={styles.textAreaWrap}>
        <textarea
          className={styles.textAreaStyle}
          name="text"
          id="text"
          value={textAreaValue.text}
          onChange={setTextAreaValue}
          minRows={5}
          placeholder="재미있는 일상을 사람들과 공유해보아요."
          autoFocus
        />
        <div className={styles.buttonStyle}>
          <div>
            <input
              type="file"
              ref={imageInput}
              name="image"
              multiple
              hidden
              onChange={onChangeImage}
            />
            <Button
              onClick={onClickImageUpload}
              className={styles.insertImgBtn}
            >
              <ImageOutlinedIcon className={styles.insertImgIcon} />
            </Button>
          </div>
          <Button type="submit" className={styles.addPostBtn}>
            게시
          </Button>
        </div>
      </div>
      {/* <Input accept="image/*" multiple type="file" /> */}

      <div>
        {imagePaths.map((v, i) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${v}`}
              style={{ width: "200px" }}
              alt={v}
            />
            <div>
              <Button onClick={onRemoveImage(i)}>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default PostForm;
