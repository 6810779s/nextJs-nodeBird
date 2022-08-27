import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@material-ui/core";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";
import Loading from "./Loading";
import Link from "next/link";
import styles from "../styles/UserProfile.module.scss";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);
  return (
    <>
      <h3>Home</h3>
      <Card className={styles.cardLayout}>
        <CardHeader
          avatar={
            <Link href={`/user/${me.id}`}>
              <a>
                <Avatar aria-label="userProfile">{me.nickname[0]}</Avatar>
              </a>
            </Link>
          }
          title={me.nickname}
          subheader={
            <Button
              onClick={useCallback(() => {
                dispatch(logoutRequestAction());
                // setIsLoggedIn(false);
              }, [])}
            >
              <LockOpenIcon />
              {logOutLoading ? <Loading /> : "Logout"}
            </Button>
          }
        />
        <CardContent
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography className={styles.typographyBox}>
            <Link href={`/user/${me.id}`}>
              <a>
                게시물
                <br />
                {me.Posts.length}{" "}
              </a>
            </Link>
          </Typography>

          <Divider style={{ height: 50 }} orientation="vertical" />
          <Typography className={styles.typographyBox}>
            <Link href="/profile">
              <a>
                팔로워
                <br />
                {me.Followers.length}
              </a>
            </Link>
          </Typography>
          <Divider style={{ height: 50 }} orientation="vertical" />
          <Typography className={styles.typographyBox}>
            <Link href="/profile">
              <a>
                팔로잉
                <br />
                {me.Followings.length}
              </a>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserProfile;
