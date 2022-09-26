import React, { useCallback } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "../styles/PostCardContent.module.scss";
const PostCardContent = ({ postData }) => {
  return (
    <div className={styles.container}>
      {postData
        .toString()
        .split(/(#[^\s#]+)/g)
        .map((v, i) => {
          if (v.match(/(#[^\s#]+)/)) {
            return (
              <Link href={`/hashtag/${v.slice(1)}`} key={i}>
                <a style={{ color: "#A3BFDF" }}>{v}</a>
              </Link>
            );
          }
          return v;
        })}
    </div>
  );
};

PostCardContent.propTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;
