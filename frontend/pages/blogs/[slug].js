import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { singleBlog } from "../../actions/blog";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Category from "../../components/crud/Category";

const SingleBlog = ({ blog }) => {
    return (
        <React.Fragment>
            <Layout>
                <main>
                    <article>
                        <div className="container-fluid">
                            <div className="row" style={{ marginTop: "-30px" }}>
                                <img
                                    src={`${API}/blog/photo/${blog.slug}`}
                                    alt={blog.title}
                                    className="img img-fluid featured-image"
                                ></img>
                            </div>
                            <section>{JSON.stringify(blog)}</section>
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
            return { blog: data };
        }
    });
};

export default SingleBlog;
``;
