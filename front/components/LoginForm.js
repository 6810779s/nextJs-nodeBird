import React, { useEffect } from "react";
import { Box, Button, Divider, Grid, TextField } from "@material-ui/core";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";
import Loading from "./Loading";
import styles from "../styles/LoginForm.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInFailure } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userEmail = data.get("userEmail");
    const password = data.get("password");
    dispatch(loginRequestAction({ userEmail, password }));
  };
  useEffect(() => {
    if (logInFailure) {
      alert(logInFailure);
    }
  }, [logInFailure]);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.logo}>
        <h3>LifeTory</h3>
        <div className={styles.content}>
          LifeTory에서 사람들과 일상을 공유해보아요.
        </div>
      </div>
      <div className={styles.loginWrap}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className={styles.loginFormStyle}
        >
          <TextField
            className={styles.textFieldStyle}
            margin="normal"
            required
            fullWidth
            type="email"
            id="userEmail"
            label="Email Address"
            name="userEmail"
            autoComplete="email"
            autoFocus
          />
          <TextField
            className={styles.textFieldStyle}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            className={styles.buttonStyle}
            type="submit"
            fullWidth
            variant="contained"
          >
            {logInLoading ? <Loading /> : "로그인"}
          </Button>
          <Grid className={styles.infoContainer}>
            <Grid className={styles.info}>
              <Link href="#" variant="body2">
                비밀번호를 잊으셨나요?
              </Link>
            </Grid>
            <Divider />
            <Grid className={cx("info", "btnStyle")}>
              <Link href="/signup" variant="body2">
                <p>회원가입</p>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default LoginForm;
