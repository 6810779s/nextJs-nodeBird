import { Box, Button, Input, TextareaAutosize } from "@material-ui/core";
import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  //   const imageInput = useRef();
  const [textAreaValue, setTextAreaValue] = useState("");
  const onChangeText = useCallback((e) => {
    setTextAreaValue(e.target.value);
  }, []);
  const { imagePaths, addPostDone } = useSelector((state) => state.post);

  useEffect(() => {
    if (addPostDone) {
      setTextAreaValue("");
    }
  }, [addPostDone]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("dailyText") !== "") {
      dispatch(addPost(data.get("dailyText")));
    }
  };

  //   const onClickImageUpload = useCallback(() => {
  //     imageInput.current.click();
  //   }, [imageInput.current]);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <TextareaAutosize
        name="dailyText"
        id="dailyText"
        aria-label="minimum height"
        value={textAreaValue}
        onChange={onChangeText}
        minRows={5}
        placeholder="어떤 신기한 일이 있었나요?"
        autoFocus
        style={{ width: "100%" }}
      />
      <Input accept="image/*" multiple type="file" />
      {/* <Input type="file" hidden ref={imageInput} /> */}
      {/* <Button onClick={onClickImageUpload} variant="contained">
        이미지 업로드
      </Button> */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        style={{ marginTop: "10px" }}
      >
        짹짹
      </Button>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default PostForm;
