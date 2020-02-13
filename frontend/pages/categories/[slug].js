import Layout from "../../components/Layout";
import { singleCategory } from "../../actions/category";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Head from "next/head";

const Category = ({ category, blogs, asPath }) => {
  console.log("category ~~~~~~~~~~~~~~", category, "blogs~~~~~~~~~~", blogs);

  const head = () => (
    <Head>
      <title>
        {category.name} | {APP_NAME}
      </title>
      <meta name="description" content={`Best Programming tutorials on ${category.name}`} />
      <link rel="canonical" href={`${DOMAIN}${asPath}`} />
      <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
      <meta property="og:description" content={`Best Programming tutorials on ${category.name}`} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}${asPath}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/images/blog.jpg`} />
      <meta property="og:image:secure_url" ccontent={`${DOMAIN}/images/blog.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  return (
    <React.Fragment>
      <Layout>
        {head()}
        <main>
          <div className="container-fluid text-center">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold"> {category.name} </h1>
                <hr />
                {blogs.map((b, i) => (
                  <div>
                    <Card key={i} blog={b} />
                    <hr />
                  </div>
                ))}
              </div>
            </header>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Category.getInitialProps = ({ query, asPath }) => {
  console.log("aspath ~~~~~~~~~~~~", asPath);
  return singleCategory(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { category: data.category, blogs: data.blogs, asPath: asPath };
    }
  });
};

export default Category;
