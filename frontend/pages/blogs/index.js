import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogWithCategoriesAndTags } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Category from "../../components/crud/Category";
import { getTags } from "../../actions/tag";
import renderHTML from "react-render-html";
import moment from "moment";
import { withRouter } from "next/router";

const Blogs = ({ blogs, categories, tags, size, router }) => {
  const head = () => {
    <Head>
      <title> Programming Blogs | {APP_NAME}</title>
      <meta
        name="description"
        content="Programming blogs and tutorials on react node next web development"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta property="og:title" content={`Lastest web development tutorials | ${APP_NAME}`} />
      <meta
        property="og:description"
        content="Programming blogs and tutorials on react node next web development"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content="/public/blog.jpg" />
      <meta property="og:image:secure_url" content="/public/blog.jpg" />
      <meta property="og:image:type" content="/public/blog.jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>;
  };

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

  const showAllCategories = () => {
    return categories.map((c, i) => {
      return (
        <Link href={`/categories/${c.slug}`} key={i}>
          <a className="btn btn-info mr-1 ml-1 mt-3">{c.name}</a>
        </Link>
      );
    });
  };

  const showAllTags = () => {
    return tags.map((t, i) => {
      return (
        <Link href={`/tags/${t.slug}`} key={i}>
          <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
        </Link>
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
                <div className="pb-5 text-center">
                  {showAllCategories()}
                  <br />
                  {showAllTags()}
                </div>
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
export default withRouter(Blogs);
