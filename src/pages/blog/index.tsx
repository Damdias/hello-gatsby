import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";

interface PostData {
    allMdx: {
        nodes: [{
            frontmatter: {
                title: string,
                date: string,
                slug: string,
            },
            id: string,
            excerpt: string
        }]
    }
}


const BlogPage = ({ data }: { data: PostData }) => {
    return (
        <Layout pageTitle="My blog post">
            <div>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>
                                <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                            </h2>
                            <p>{node.frontmatter.date}</p>
                        </article>
                    ))
                }

            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="My Blogf posts" />
export const query = graphql`
query {
  allMdx(sort: { frontmatter: { date: DESC }}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`
export default BlogPage;