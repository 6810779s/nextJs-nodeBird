import React from "react";
import {
  Button,
  Card,
  List,
  ListItem,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import styles from "../styles/FollowList.module.scss";

import Link from "next/link";
const FollowList = ({ data, header, onClickMore, loading }) => {
  return (
    <>
      <h3>{header}</h3>
      <List style={{ padding: "0" }} className={styles.container}>
        {data &&
          data.map((item, idx) => (
            // <Link href={`/user/${}`}>
            <Card className={styles.listItemWrap} key={item.nickname + idx}>
              <ListItem className={styles.listItem}>
                <div className={styles.profileImg}>
                  <PersonIcon style={{ fontSize: "50px" }} />
                </div>
                <div>{item.nickname}</div>
              </ListItem>
            </Card>
            // </Link>
          ))}
      </List>
      {!loading && <Button onClick={onClickMore}>더보기</Button>}
    </>
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onClickMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default FollowList;
