import React, { useState } from "react";
import FileUpload from "./components/file-upload";

const App = () => {
  return (
    <>
      <div> You can upload your files from here </div>
      <FileUpload />
    </>
  );
};

export default App;
