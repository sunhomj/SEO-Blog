import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { createBlog } from "../../actions/blog";
import { QuillFormats, QuillModules } from "../../helpers/quill";

const BlogUpdate = ({ router }) => {
  console.log(router);
  const [blog, setBlog] = useState({});
  const [message, setMessage] = useState("");
  const token = getCookie("token");

  useEffect(() => {
    initBlog();
  }, []);

  const initBlog = () => {};

  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          <p>create blog form</p>
          <div className="pt-3">show duccess and error messages</div>
        </div>

        <div className="col-md-4">
          <div className="form-group pb-2">
            <h5>Featured image</h5>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BlogUpdate);
