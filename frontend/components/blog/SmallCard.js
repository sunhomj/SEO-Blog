import Head from "next/head";
import Link from "next/link";

import { API } from "../../config";
import Category from "../../components/crud/Category";

import renderHTML from "react-render-html";
import moment from "moment";

const SmallCard = ({ blog }) => {
  return (
    <React.Fragment>
      <div className="card">
        <section>
          <Link href={`blogs/${blog.slug}`}>
            <a>
              <img
                style={{ maxHeight: "150px", width: "auto" }}
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
                className="img img-fluid"
              />
            </a>
          </Link>
        </section>
      </div>

      <div className="card-body">
        <section>
          <Link href={`blogs/${blog.slug}`}>
            <h5 className="card-title">{blog.title}</h5>
          </Link>
          <p className="card-text">{renderHTML(blog.excerpt)}</p>
        </section>
      </div>

      <div className="card-body">
        <Link href={`blogs/${blog.slug}`}>
          <h5 className="card-title">Read more</h5>
        </Link>
        Posted {moment(blog.updatedAt).fromNow()} by {blog.postedBy.name}
      </div>
    </React.Fragment>
  );
};

export default SmallCard;
