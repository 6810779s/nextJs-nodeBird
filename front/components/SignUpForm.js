import "date-fns";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequestAction } from "../reducers/user";
import Loading from "./Loading";
import Router from "next/router";
import styles from "../styles/SignUpForm.module.scss";

const SignUpForm = ({ signupClose }) => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone } = useSelector((state) => state.user);
  const [checkState, setCheckState] = useState(false);
  const [signUpState, setSignUpState] = useState(true);
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    if (signUpDone) {
      Router.push("/");
    }
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get("nickname") &&
      data.get("userEmail") &&
      data.get("password") &&
      checkState
    ) {
      setSignUpState(true);
      dispatch(
        signUpRequestAction({
          email: data.get("userEmail"),
          password: data.get("password"),
          nickname: data.get("nickname"),
        })
      );
    } else {
      setSignUpState(false);
    }
  };

  const checkBoxState = useCallback((e) => {
    if (e.target.checked) {
      setCheckState(true);
    } else {
      setCheckState(false);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <CancelIcon className={styles.close} onClick={signupClose} />
      </div>
      <div>
        <div className={styles.title}>
          <div className={styles.signIcon}>
            <LockOutlinedIcon />
          </div>
          <div className={styles.text}>회원가입</div>
          {/* <Avatar className={styles.signIcon}>
            <LockOutlinedIcon />
          </Avatar> */}
          {/* <p className={styles.text}>회원가입</p> */}
        </div>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                autoComplete="given-name"
                name="nickname"
                required
                id="nickname"
                label="사용하실 닉네임"
                autoFocus
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                id="date"
                name="date"
                label="생일"
                type="date"
                defaultValue="2022-01-01"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                id="userEmail"
                label="이메일"
                name="userEmail"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <div className={styles.checkboxContainer}>
                <input type="checkbox" onChange={checkBoxState} />
                <label>개인정보 제공에 동의합니다.</label>
                <p className={styles.helper}>
                  {!checkState && "* 위 약관에 동의를 하셔야 됩니다."}
                </p>
              </div>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={styles.signupBtn}
          >
            {signUpLoading ? <Loading /> : "가입하기"}
          </Button>
          {/* {!signUpState && (
            <div style={{ color: "red" }}>모든 정보를 입력해 주세요</div>
          )} */}
        </Box>
      </div>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </div>
  );
};

export default SignUpForm;
