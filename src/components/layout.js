/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 import styled from "astroturf/react"
 
 import Header from "./header"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   const Content = styled.div`
    ${"@apply mb-auto h-full p-10"};
   `;
 
   const Footer = styled.footer`
     ${"@apply flex h-6 justify-center text-sm text-gray-800 font-light"};
   `;
 
   return (
     <div className="flex flex-col h-screen">
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       <Content>{children}</Content>
       <Footer>
         <p>
           © {new Date().getFullYear()}, Built with
           {` `}
           <a href="https://www.gatsbyjs.com">Gatsby</a>
         </p>
       </Footer>
     </div>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 