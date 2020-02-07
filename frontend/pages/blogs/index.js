import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogWithCategoriesAndTags } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API } from "../../config";
import Category from "../../components/crud/Category";
import { getTags } from "../../actions/tag";
import renderHTML from "react-render-html";
import moment from "moment";

const Blogs = ({ blogs, categories, tags, size }) => {
  const showAllBlogs = () => {
    return blogs.map((blog, index) => {
      return (
        <article key={index}>
          <Card blog={blog} />
          <hr />
        </article>
      );
    });
  };
  return (
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
                <div className="col-md-12">{showAllBlogs()} </div>
              </div>
            </div>
          </header>
        </div>
      </main>
    </Layout>
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
