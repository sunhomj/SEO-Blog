import Layout from "../../components/Layout";
import { singleCategory } from "../../actions/category";
import Card from "../../components/blog/Card";

const Category = ({ category, blogs }) => {
  console.log("category~~", category, "blogs~~~~", blogs);
  return (
    <React.Fragment>
      <Layout>
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

Category.getInitialProps = ({ query }) => {
  console.log("111111111111111111111111", query);
  return singleCategory(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { category: data.category, blogs: data.blogs };
    }
  });
};

export default Category;
