import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
const AboutPage = () => {
    return (
        <Layout pageTitle="About us"  >
            <p>Hi There! I'm the proud creator of this site, which I built wiht Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About us" />

export default AboutPage;