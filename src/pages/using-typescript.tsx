// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import styled, { css } from "astroturf/react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/using-typescript.css"

type DataProps = {
  site: {
    buildTime: string
  }
}

// TODO: Typescript vs Astroturf page errors
// * https://github.com/jquense/gatsby-plugin-astroturf/issues/4
/*
const Article = styled('article')`
  ${"@apply font-normal leading-relaxed"};
  
  em {
    ${"@apply italic rounded-sm p-1 bg-gray-100 text-yellow-500"};
  }
`;
*/


const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
      <article>
        <h1 className="text-3xl leading-relaxed">Gatsby supports TypeScript by default!</h1>
        <p>
          This means that you can create and write <em>.ts/.tsx</em> files for your
          pages, components etc. Please note that the <em>gatsby-*.js</em> files
          (like gatsby-node.js) currently don't support TypeScript yet.
        </p>
        <p>
          For type checking you'll want to install <em>typescript</em> via npm and
          run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
        </p>
        <p>
          You're currently on the page "{path}" which was built on{" "}
          {data.site.buildTime}.
        </p>
        <p>
          To learn more, head over to our{" "}
          <a href="https://www.gatsbyjs.com/docs/typescript/">
            documentation about TypeScript
          </a>
          .
        </p>
      </article>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
