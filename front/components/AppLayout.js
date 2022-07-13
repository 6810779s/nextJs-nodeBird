import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Link from "next/link";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import { useSelector } from "react-redux";
import Router from "next/router";
const useStyles = makeStyles({
  wrap: {
    display: "flex",
    margin: "auto",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "1000px",
  },
  mainMenu: {
    padding: "10px 0 10px 0",
  },
  searchInputContainer: {
    display: "flex",
    height: "30px",
  },
  inputDivide: {
    height: "20px",
    margin: "3px",
  },
  loginForm: {
    margin: "auto",
  },
  textLayout: {
    textAlign: "center",
  },
});

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  // const [logInDone, setlogInDone] = useState(false);
  const classes = useStyles();
  const searchChange = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [search]
  );
  const searchBtn = useCallback(() => {
    Router.push(`/hashtag/${search}`);
  }, [search]);

  return (
    <div>
      <Container className={classes.wrap}>
        <Grid item className={classes.textLayout}>
          <Link href="/">
            <a>
              <HomeIcon /> <br />홈
            </a>
          </Link>
        </Grid>
        <Grid item className={classes.textLayout}>
          <Link href="/profile">
            <a>
              <FavoriteIcon /> <br />
              프로필
            </a>
          </Link>
        </Grid>
        <Grid item>
          <Paper
            component="form"
            className={classes.searchInputContainer}
            sm={3}
          >
            <input
              style={{ border: "none" }}
              placeholder="검색"
              value={search}
              onChange={searchChange}
            />

            <Divider style={{ height: 20, margin: 3 }} orientation="vertical" />
            <Button onClick={searchBtn}>
              <SearchIcon />
            </Button>
          </Paper>
        </Grid>
        <Grid item className={classes.textLayout}>
          <Link href="/signup">
            <a>
              <PersonIcon /> <br />
              회원가입
            </a>
          </Link>
        </Grid>
      </Container>
      <Grid container maxwidth="xs" item justifyContent="center" spacing={3}>
        <Grid item xs={12} md={12}>
          {me ? <UserProfile /> : <LoginForm />}
        </Grid>
        <Grid item xs={6} md={6}>
          {children}
        </Grid>
        <Grid item xs={12} md={12}>
          <a
            href="https://www.github.com/6810779s"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by eunhee
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

//xs:모바일, sm:태블릿, md:작은 데스크탑, lg:큰 데스크탑
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
