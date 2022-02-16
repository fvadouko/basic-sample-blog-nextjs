import React from "react";

const PostFeed = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <p key={`post-${index}`}>{post.content}</p>
      ))}
    </div>
  );
};

export default PostFeed;
