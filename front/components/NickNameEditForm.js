import React, { useEffect } from "react";
import { Button, Input, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NICKNAME_REQUEST } from "../constants/user";
import Loading from "../components/Loading";
import styles from "../styles/NickNameEditForm.module.scss";

const useStyles = makeStyles({
  input: { flex: 1 },
});
const NickNameEditForm = () => {
  const dispatch = useDispatch();
  const { changeNicknameLoading, changeNicknameDone, changeNicknameFailure } =
    useSelector((state) => state.user);
  const classes = useStyles();
  const changeNickName = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("nickname")) {
      dispatch({
        type: CHANGE_NICKNAME_REQUEST,
        data: data.get("nickname"),
      });
    } else {
      alert("변경할 닉네임을 입력해 주세요.");
    }
  };

  useEffect(() => {
    if (changeNicknameFailure) {
      alert(changeNicknameFailure);
    }
  }, [changeNicknameFailure]);
  useEffect(() => {
    if (changeNicknameDone) {
    }
  }, [changeNicknameDone]);
  return (
    <Paper
      className={styles.container}
      component="form"
      onSubmit={changeNickName}
    >
      <input
        placeholder="닉네임"
        id="nickname"
        name="nickname"
        type="text"
        className={styles.inputStyle}
      />
      <Button variant="contained" type="submit" color="primary">
        {changeNicknameLoading ? <Loading /> : "수정"}
      </Button>
    </Paper>
  );
};

export default NickNameEditForm;
