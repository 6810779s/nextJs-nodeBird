import "date-fns";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import React, { useState, useCallback } from "react";
import DateFnsUtils from "@date-io/date-fns";
import Link from "next/link";
import { Copyright } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { signUpRequestAction } from "../reducers/user";
import Loading from "./Loading";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

const useStyles = makeStyles({});
const SignUpForm = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);
  const [checkState, setCheckState] = useState(false);
  const [signUpState, setSignUpState] = useState(false);
  const [selectedDate, handleDateChange] = useState(new Date());
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      data.get("firstName") &&
      data.get("lastName") &&
      data.get("userEmail") &&
      data.get("password") &&
      checkState
    ) {
      setSignUpState(true);
      // dispatch(signUpRequestAction({ email, password, nickname }));
    } else {
      setSignUpState(false);
    }
  };

  const checkBoxState = useCallback((e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCheckState(true);
    } else {
      setCheckState(false);
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar style={{ background: "red" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                name="date"
                label="Birthday"
                type="date"
                defaultValue="2022-01-01"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: "100%" }}
              />
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  placeholder="2018/10/10"
                  label="생년월일"
                  value={selectedDate}
                  onChange={(date) => handleDateChange(date)}
                  format="yyyy/MM/dd"
                />
              </MuiPickersUtilsProvider> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="email"
                id="userEmail"
                label="Email"
                name="userEmail"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    onChange={checkBoxState}
                  />
                }
                label="개인정보 제공에 동의합니다."
              />
              {!checkState && (
                <FormHelperText style={{ color: "red" }}>
                  * 위 약관에 동의를 하셔야 됩니다.
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {signUpLoading ? <Loading /> : "Sign Up"}
          </Button>
          {signUpState ? (
            <div>Go!</div>
          ) : (
            <div style={{ color: "red" }}>모든 정보를 입력해 주세요</div>
          )}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default SignUpForm;
