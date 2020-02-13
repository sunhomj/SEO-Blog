import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogWithCategoriesAndTags } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";

import { withRouter } from "next/router";

const Blogs = ({ blogs, categories, tags, totlaBlogs, blogsLimit, router }) => {
  const head = () => (
    <Head>
      <title>Programming blogs | {APP_NAME}</title>
      <meta
        name="description"
        content="Programming blogs and tutorials on react node next.js and web developoment"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
      <meta
        property="og:description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/images/blog.jpg`} />
      <meta property="og:image:secure_url" ccontent={`${DOMAIN}/images/blog.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totlaBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogWithCategoriesAndTags(toSkip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
          Load More
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs.map((blog, index) => {
      return (
        <article key={index}>
          <Card blog={blog} />
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

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => {
      return (
        <article key={i}>
          <Card blog={blog} />
        </article>
      );
    });
  };

  return (
    <React.Fragment>
      {head()}
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
              <div className="container-fluid">{showAllBlogs()}</div>
              <div className="container-fluid">{showLoadedBlogs()}</div>
              <div className="text-center pt-5 pb-5 "> {loadMoreButton()}</div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

//server-side rendering method from next.js    getinitialprops - can be used only on pages Not in components
Blogs.getInitialProps = () => {
  let skip = 0;
  let limit = 2;
  return listBlogWithCategoriesAndTags(limit, skip).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totlaBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip
      };
      // once these are returned, these can be used as props.
    }
  });
};
export default withRouter(Blogs);
