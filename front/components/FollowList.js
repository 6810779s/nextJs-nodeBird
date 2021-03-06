import React from "react";
import {
  Button,
  Card,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  listContainerWrap: {
    width: "100%",
    height: "170px",
    marginTop: "15px",
    border: "1px solid #DCDBDA",
    borderRadius: "5px",
    padding: "13px",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  listItemWrap: {
    height: "160px",
    width: "100px",
    padding: "5px",
    marginRight: "15px",
    display: "inline-block",
  },
  listItem: { display: "flex", alignItems: "center" },
});
const FollowList = ({ data, header, onClickMore, loading }) => {
  const classes = useStyles();
  return (
    <>
      <h3>{header}</h3>
      <List className={classes.listContainerWrap}>
        {data &&
          data.map((item, idx) => (
            <Card className={classes.listItemWrap} key={item.nickname + idx}>
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <PersonIcon style={{ width: "20px" }} />
                </ListItemAvatar>
                <ListItemText primary={item.nickname} />
              </ListItem>
            </Card>
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
