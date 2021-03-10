import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "astroturf/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Greeting = styled.h1`
    background-clip: text;
    -webkit-text-fill-color: transparent;
    ${"@apply leading-normal font-sans font-semibold text-purple-700 bg-purple-700"};
    ${"@apply bg-gradient-to-r from-purple-700 via-red-500 to-yellow-500"};
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto h-full flex justify-center items-center">
      <div className="flex">
        <StaticImage
          className="flex-none md:visible md:w-60 md:h-60 invisible w-0 rounded-none animate-bounce"
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
        />
        <div className="px-6 text-left space-y-4">
          <Greeting className="sm:text-7xl md:text-8xl text-4xl md:text-left text-center">
            Hi people
          </Greeting>
          <div className="font-normal leading-snug text-center md:text-left">
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
