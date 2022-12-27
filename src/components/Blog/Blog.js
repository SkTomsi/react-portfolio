import React from "react";
import { BlogData } from "../../Shared/Data";

import "./Blog.scss";

const Blog = () => {
  console.log(BlogData);
  return (
    <div className="blog">
      <h1>Blog</h1>
      <div>
        {BlogData.map((blog) => {
          return (
            <div className="blog__container" key={blog.id}>
              <div className="blog__image">
                <img src={blog.image} alt="blog" />
              </div>
              <div className="blog__header">
                <h3>{blog.title}</h3>
                <p>{blog.date}</p>
              </div>
              <div className="blog__description">
                <p>{blog.desc}</p>
              </div>
              <div className="blog__button">
                <a href={blog.link} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
