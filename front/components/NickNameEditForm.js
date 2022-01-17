import React from 'react';
import { Button, InputBase, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paperWrap: { display: 'flex' },
  input: { flex: 1 },
});
const NickNameEditForm = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paperWrap}>
      <InputBase placeholder="닉네임" className={classes.input} />
      <Button variant="contained" color="primary">
        수정
      </Button>
    </Paper>
  );
};

export default NickNameEditForm;
