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
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";
import Loading from "./Loading";
import Link from "next/link";
const useStyles = makeStyles({
  profileWrap: { maxWidth: "500px", margin: "auto", padding: "30px" },
  typographyBox: { width: "55px", background: "#E6E6E6", textAlign: "center" },
  cardLayout: {
    maxWidth: "400px",
    margin: "20px auto",
  },
});

const UserProfile = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { me, logOutLoading } = useSelector((state) => state.user);
  return (
    <>
      <Card className={classes.cardLayout}>
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
          <Typography className={classes.typographyBox}>
            <Link href={`/user/${me.id}`}>
              <a>
                {" "}
                짹짹
                <br />
                {me.Posts.length}{" "}
              </a>
            </Link>
          </Typography>

          <Divider style={{ height: 50 }} orientation="vertical" />
          <Typography className={classes.typographyBox}>
            <Link href="/profile">
              <a>
                팔로워
                <br />
                {me.Followers.length}
              </a>
            </Link>
          </Typography>
          <Divider style={{ height: 50 }} orientation="vertical" />
          <Typography className={classes.typographyBox}>
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
