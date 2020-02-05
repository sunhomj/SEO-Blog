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

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const BlogCreate = ({ router }) => {
  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }
    if (localStorage.getItem("blog")) {
      // convert data to javascript
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checked, setChecked] = useState([]);
  const [checkedTag, setCheckedTag] = useState([]);

  const [body, setBody] = useState(blogFromLS());
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    title: "",
    hidePublishButton: false
  });

  const { error, sizeError, success, formData, title, hidePublishButton } = values;
  const token = getCookie("token");
  // const existingBody = window.localStorage.getItem("blog");
  // console.log(existingBody);

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    setBody({ ...body });
    initCategories();
    initTags();
  }, [router]);

  const initCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  // console.log(router);
  const publishBlog = e => {
    e.preventDefault();

    createBlog(formData, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          title: "",
          error: "",
          success: `A new blog title "${data.title}" is created`
        });
        setBody("");
        setCategories([]);
        setTags([]);
        initCategories();
        initTags();
      }
    });
    console.log("ready to publishBlog");
  };
  // photo file handler
  const titlePhotoHandller = name => e => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleBody = e => {
    // console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const categoryToggleHandller = id => () => {
    setValues({ ...values, error: "" });
    const clickedCategories = [...checked];
    const indexOfClickedCategory = checked.indexOf(id);
    if (indexOfClickedCategory === -1) {
      clickedCategories.push(id);
    } else {
      clickedCategories.splice(indexOfClickedCategory, 1);
    }
    setChecked(clickedCategories);
    formData.set("categories", clickedCategories);
  };

  const tagToggleHandller = id => () => {
    setValues({ ...values, error: "" });
    const clickedTags = [...checkedTag];
    const indexOfClickedTag = checkedTag.indexOf(id);
    if (indexOfClickedTag === -1) {
      clickedTags.push(id);
    } else {
      clickedTags.splice(indexOfClickedTag, 1);
    }
    setCheckedTag(clickedTags);
    console.log(clickedTags);
    formData.set("tags", clickedTags);
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input onChange={categoryToggleHandller(c._id)} type="checkbox" className="mr-2" />
          <label className="form-check-label">{c.name}</label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className="list-unstyled">
          <input onChange={tagToggleHandller(t._id)} type="checkbox" className="mr-2" />
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
  };

  const showError = () => (
    <div className="alert alert-danger" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );
  const showSuccess = () => (
    <div className="alert alert-success" style={{ display: success ? "" : "none" }}>
      {success}
    </div>
  );

  const createBlogForm = () => {
    return (
      <form onSubmit={publishBlog}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input type="text" className="form-control" onChange={titlePhotoHandller("title")} />
        </div>
        <div className="form-group">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Write something amazing..."
            onChange={handleBody}
          />
        </div>
        <div>
          <button className="btn btn-primary">Publish</button>
        </div>
      </form>
    );
  };
  return (
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          {createBlogForm()}
          <div className="pt-3">
            {showError()}
            {showSuccess()}
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group pb-2">
            <h5>Featured image</h5>
            <hr />

            <label className="btn btn-outline-info">
              Upload featured image
              <input onChange={titlePhotoHandller("photo")} type="file" accept="image/*" hidden />
            </label>
            <small className="text-muted"> Max size:1 Mb</small>
          </div>
          <div>
            <h5>Categories</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>{showCategories()}</ul>
          </div>
          <div>
            <h5>Tags</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>{showTags()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BlogCreate);
