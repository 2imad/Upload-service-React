import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const FileUpload = () => {
  const classes = useStyles();
  const [file, setFile] = useState({});

  const addFile = e => {
    setFile(e.target.files[0]);
  };

  const sendData = async () => {
    let formData = new FormData();
    formData.append("avatar", file);
    const res = await axios.post("http://localhost:3001/profile", formData);
    console.log(res);
  };

  return (
    <>
      <input
        onChange={addFile}
        type="file"
        placeholder="Upload your file here"
      />
      <Button
        onClick={sendData}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Submit Photo
      </Button>
    </>
  );
};

export default FileUpload;
