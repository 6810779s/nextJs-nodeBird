import React from "react";
import { Button, Card, List, ListItem } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";
import styles from "../styles/FollowList.module.scss";

import Link from "next/link";
const FollowList = ({ data, header, onClickMore, loading }) => {
  console.log("data:", data);
  return (
    <>
      <h3>{header}</h3>
      <List style={{ padding: "0" }} className={styles.container}>
        {data && (
          <>
            {data.length === 0 && (
              <div className={styles.noFriend}>
                {header == "팔로워" ? "팔로워가" : "팔로잉이"} 없습니다.{" "}
              </div>
            )}
            {data.map((item, idx) => (
              <Card className={styles.listItemWrap} key={item.nickname + idx}>
                <Link href={`/user/${item.id}`}>
                  <a>
                    <ListItem className={styles.listItem}>
                      <div className={styles.profileImg}>
                        <PersonIcon style={{ fontSize: "50px" }} />
                      </div>
                      <div>{item.nickname}</div>
                    </ListItem>
                  </a>
                </Link>
              </Card>
            ))}
          </>
        )}
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
