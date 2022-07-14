import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";
import Loading from "./Loading";
const useStyles = makeStyles({
  loginWrap: {
    margin: "auto",
    maxWidth: "500px",
    padding: "30px",
  },
  iconWrap: { backgroundColor: "blue" },
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInFailure } = useSelector((state) => state.user);
  // const [id, setId] = useState('');
  // const [password, setPassword] = useState('');
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
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
    <Container component="main" className={classes.loginWrap}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{ margin: "auto" }}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar className={classes.iconWrap}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" align="center" variant="h5">
          Sign in
        </Typography>
        <TextField
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
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {logInLoading ? <Loading /> : "Sign In"}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginForm;
