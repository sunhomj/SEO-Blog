import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { singleBlog } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Category from "../../components/crud/Category";
import moment from "moment";
import renderHTML from "react-render-html";
import withRouter from "next/router";

const SingleBlog = ({ blog, query }) => {
  const head = () => (
    <Head>
      <title>
        {blog.title} | {APP_NAME}
      </title>
      <meta name="description" content={blog.mdesc} />
      <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
      <meta property="og:description" content={blog.mdesc} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
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
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <article>
            <div className="container-fluid">
              <section>
                <div className="row" style={{ marginTop: "-30px" }}>
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                  ></img>
                </div>
              </section>
              <section>
                <div className="container">
                  <h2 className="display-4 pb-3 pt-3 text-center font-weight-bold">{blog.title}</h2>
                  <p className="lead mark mt-3">
                    Written by {blog.postedBy.name} | published {moment(blog.createdAt).fromNow()}
                  </p>
                  <div className="pb-3">
                    <section>
                      {showBlogCategories(blog)}
                      {showBlogTags(blog)}
                      <br />
                      <br />
                    </section>
                  </div>
                </div>
              </section>
            </div>
            <div className="container">
              <section>
                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
              </section>
            </div>
            <div className="container pb-5">
              <p>related blogs</p>
            </div>
            <div className="container pb-5">
              <p>Show comments</p>
            </div>
          </article>
        </main>
      </Layout>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
``;
