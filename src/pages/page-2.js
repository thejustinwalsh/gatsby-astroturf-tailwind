import * as React from "react"
import styled from "astroturf/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Article = styled.article`
  ${"@apply font-normal leading-snug"};
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Article>
      <h1 className="text-3xl leading-relaxed">Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </Article>
  </Layout>
)

export default SecondPage
