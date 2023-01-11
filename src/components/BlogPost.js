import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
      <Comment commentText="That's BullShit!!! - Jurgen" />
      <Comment commentText="I don't care what y'all think. Brian's learning React!!! - Pep" />
      <Comment commentText="Very Nice, Very Nice - Maxine :) " />
    </div>
  );
}

export default BlogPost;
