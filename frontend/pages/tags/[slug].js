import Layout from "../../components/Layout";
import { singleTag } from "../../actions/tag";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Head from "next/head";

const Tag = ({ tag, blogs, asPath }) => {
  const head = () => (
    <Head>
      <title>
        {tag.name} | {APP_NAME}
      </title>
      <meta name="description" content={`Best Programming tutorials on ${tag.name}`} />
      <link rel="canonical" href={`${DOMAIN}${asPath}`} />
      <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
      <meta property="og:description" content={`Best Programming tutorials on ${tag.name}`} />
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
                <h1 className="display-4 font-weight-bold"> {tag.name} </h1>
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

Tag.getInitialProps = ({ query, asPath }) => {
  return singleTag(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
      return { tag: data.tag, blogs: data.blogs, asPath: asPath };
    }
  });
};

export default Tag;
