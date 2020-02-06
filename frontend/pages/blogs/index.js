import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogWithCategoriesAndTags } from "../../actions/blog";
import { API } from "../../config";
import Category from "../../components/crud/Category";
import { getTags } from "../../actions/tag";

const Blogs = ({ blogs, categories, tags, size }) => {
  const showAllBlogs = () => {
    return blogs.map((blog, index) => {
      return (
        <article key={i}>
          <div className="lead">
            <header>
              <Link href={`/blogs/${blog.slug}`}></Link>
              <a>
                <h2 className="display-4 pb-3 font-weight-bold">{blog.title}</h2>
              </a>
            </header>
            <section>
              <p className="mark ml-1 pt-2 pb-2">
                Written by {blog.postedBy.name} | published {blog.updatedAt}
              </p>
              <section>
                <p>blog Category and Tags</p>
              </section>
              <div classNam="row">
                <div className="col-md-4">image</div>
                <div className="col-md-8">
                  <section>
                    {blog.excerpt}
                    <Link href="blog/${blog.slug"></Link>
                    <a className="btn btn-primary pt-2" a></a>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </article>
      );
    });
  };
  return (
    <React.Fragment>
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold text-center">
                  {" "}
                  Programming blogs and tutor
                </h1>
                <section>
                  <p> show categories and tags</p>
                </section>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12"> {JSON.stringify(blogs)}</div>
                </div>
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

//server-side rendering method from next.js    getinitialprops - can be used only on pages Not in components
Blogs.getInitialProps = () => {
  return listBlogWithCategoriesAndTags().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        size: data.size
      };
      // once these are returned, these can be used as props.
    }
  });
};
export default Blogs;
