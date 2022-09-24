import React, { useEffect } from "react";
import { Button, Input, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NICKNAME_REQUEST } from "../constants/user";
import Loading from "../components/Loading";
import styles from "../styles/NickNameEditForm.module.scss";
import useInput from "../hooks/useInput";

const NickNameEditForm = () => {
  const dispatch = useDispatch();
  const [changeNick, setNickname, reset] = useInput({ nickname: "" });
  const { changeNicknameLoading, changeNicknameDone, changeNicknameFailure } =
    useSelector((state) => state.user);
  useEffect(() => {
    if (changeNicknameDone) {
      reset();
    }
  }, [changeNicknameDone]);
  useEffect(() => {
    if (changeNicknameFailure) {
      alert(changeNicknameFailure);
    }
  }, [changeNicknameFailure]);
  const changeNickName = (e) => {
    e.preventDefault();
    if (changeNick.nickname) {
      dispatch({
        type: CHANGE_NICKNAME_REQUEST,
        data: changeNick.nickname,
      });
    } else {
      alert("변경할 닉네임을 입력해 주세요.");
    }
  };

  return (
    <Paper
      className={styles.container}
      component="form"
      onSubmit={changeNickName}
    >
      <input
        className={styles.inputStyle}
        name="nickname"
        id="nickname"
        value={changeNick.nickname}
        onChange={setNickname}
        placeholder="닉네임"
        type="text"
      />
      <Button variant="contained" type="submit" color="primary">
        {changeNicknameLoading ? <Loading /> : "수정"}
      </Button>
    </Paper>
  );
};

export default NickNameEditForm;
