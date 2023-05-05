import React, { useState, useEffect, useContext } from "react";
import "../components/Post/Post.css";
const Post = ({ data }) => {
  return (
      <div className="detail" style={{padding:"0.7rem"}}>
        <span style={{padding:"0.5rem", margin:"auto"}}><br/>#{data.desc}</span>
      </div>
  );
};
export default Post;
