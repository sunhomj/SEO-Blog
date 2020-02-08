import Head from "next/head";
import Link from "next/link";

import { API } from "../../config";
import Category from "../../components/crud/Category";

import renderHTML from "react-render-html";
import moment from "moment";

const Card = ({ blog }) => {
  const showBlogCategories = blog =>
    blog.categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`}>
        <a className="btn btn-info mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = blog =>
    blog.tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  return (
    <div className="lead pb-4">
      <header>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <h2 className=" pb-3 font-weight-bold">{blog.title}</h2>
          </a>
        </Link>
      </header>
      <section>
        <p className="mark ml-1 pt-2 pb-2">
          Written by {blog.postedBy.name} | published {moment(blog.createdAt).fromNow()}
        </p>
        <section>
          {showBlogCategories(blog)}
          {showBlogTags(blog)}
          <br />
          <br />
        </section>

        <div className="row">
          <div className="col-md-4">
            <section>
              <img
                className="img img-fluid"
                style={{ maxHeight: "13em", width: "auto" }}
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
              />
            </section>
          </div>
          <div className="col-md-8">
            <section>
              <div className="pb-3">{renderHTML(blog.excerpt)}</div>
              <Link href={`/blog/${blog.slug}`}>
                <a className="btn btn-primary pt-2">Read more</a>
              </Link>
            </section>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Card;
