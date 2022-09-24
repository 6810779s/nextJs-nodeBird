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

const UserProfile = ({ info }) => {
  const dispatch = useDispatch();
  // const { me, logOutLoading } = useSelector((state) => state.user);
  return (
    <>
      <Card className={styles.cardLayout}>
        <CardHeader
          avatar={
            <Link href={`/user/${info.id}`}>
              <a>
                <Avatar aria-label="userProfile">{info.nickname[0]}</Avatar>
              </a>
            </Link>
          }
          title={info.nickname}
        />
        <CardContent
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography className={styles.typographyBox}>
            <Link href={`/user/${info.id}`}>
              <a>
                게시물
                <br />
                {info.Posts.length}{" "}
              </a>
            </Link>
          </Typography>

          <Divider style={{ height: 50 }} orientation="vertical" />
          <Typography className={styles.typographyBox}>
            <Link href="/profile">
              <a>
                팔로워
                <br />
                {info.Followers.length}
              </a>
            </Link>
          </Typography>
          <Divider style={{ height: 50 }} orientation="vertical" />
          <Typography className={styles.typographyBox}>
            <Link href="/profile">
              <a>
                팔로잉
                <br />
                {info.Followings.length}
              </a>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default UserProfile;
