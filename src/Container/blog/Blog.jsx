import React from "react";
import {
  BlogCard,
  BlogCardMain,
  BlogSec,
  BlogText,
  CardText,
} from "./Blog.styles";
import data from "./Data";
import blog from "../../assets/blog05.png";

const Blog = () => {
  return (
    <BlogSec id="blog">
      <BlogText>
        <h1>
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </BlogText>

      <BlogCardMain>
        {data.map((elem, ind) => (
          <BlogCard>
            <img src={elem.img} alt="" />
            <CardText>
              <a href="">Sep 26, 2021</a>
              <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
              <a href="">Read Full Article</a>
            </CardText>
          </BlogCard>
        ))}
      </BlogCardMain>
    </BlogSec>
  );
};

export default Blog;
