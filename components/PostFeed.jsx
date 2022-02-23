import React from "react";
import Link from "next/link";

const PostFeed = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post, index) => (
        <>
          <p key={`post-${index}`}>{post.content.substr(0, 15)}</p>
          <Link href={`/${post.username}/${post.slug}`}>
            <a>Read more</a>
          </Link>
          <hr />
        </>
      ))}
    </div>
  );
};

export default PostFeed;
