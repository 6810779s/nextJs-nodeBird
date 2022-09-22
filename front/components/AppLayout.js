import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import LoginForm from "./LoginForm";
import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import styles from "../styles/Applayout.module.scss";
import { Avatar } from "@material-ui/core";
import { logoutRequestAction } from "../reducers/user";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  // const [logInDone, setlogInDone] = useState(false);
  // const classes = useStyles();
  const searchChange = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [search]
  );
  const searchBtn = useCallback(() => {
    Router.push(`/hashtag/${search}`);
  }, [search]);

  const logout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);
  return (
    <>
      {me ? (
        <div className={styles.container}>
          <div className={styles.menuContainer}>
            <div className={styles.wrap}>
              <div className={styles.logo}>LifeTory</div>
              <div>
                <Paper component="form" className={styles.searchInputContainer}>
                  <input
                    className={styles.searchInputStyle}
                    style={{ border: "none" }}
                    placeholder="검색"
                    value={search}
                    onChange={searchChange}
                  />

                  <Divider
                    style={{ height: 20, margin: "auto" }}
                    orientation="vertical"
                  />
                  <Button onClick={searchBtn}>
                    <SearchIcon />
                  </Button>
                </Paper>
              </div>
              <div className={styles.menu}>
                <div className={cx("textLayout", "menuItem")}>
                  <Link href="/">
                    <a>
                      <HomeIcon className={styles.homeIcon} />
                      {/* <br />홈 */}
                    </a>
                  </Link>
                </div>
                <div className={styles.menuItem}>
                  <Link href="/profile">
                    <a>
                      <Avatar>{me.nickname[0]}</Avatar>
                    </a>
                  </Link>
                </div>
                <div className={styles.menuItem}>
                  <Button onClick={logout}>
                    <ExitToAppIcon className={styles.logoutIcon} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainContainer}>
            <div>{children}</div>
            <footer>
              <a
                href="https://www.github.com/6810779s"
                target="_blank"
                rel="noreferrer noopener"
              >
                Made by eunhee
              </a>
            </footer>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

//xs:모바일, sm:태블릿, md:작은 데스크탑, lg:큰 데스크탑
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
