import Layout from "../../components/Layout";
import { singleTag } from "../../actions/tag";
import Card from "../../components/blog/Card";
import { listBlogWithCategoriesAndTags } from "../../actions/blog";

const Category = ({ tag, blogs }) => {
  console.log("tag~~", tag, "blogs~~~~", blogs);
  return (
    <React.Fragment>
      <Layout>
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

Category.getInitialProps = ({ query }) => {
  console.log("111111111111111111111111", query);
  return singleTag(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
      return { tag: data.tag, blogs: data.blogs };
    }
  });
};

export default Category;
