import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "astroturf/react"

const NavLink = styled(Link)`
  ${"@apply px-3 py-2 rounded-md text-base font-medium"};
  ${"@apply text-gray-300 hover:bg-gray-700 hover:text-white"};
  &[aria-current] {
    ${"@apply bg-gray-900 text-white hover:bg-gray-900"};
  }
`

const MobileNavButton = ({ active = false, onClick }) => (
  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    {/* Mobile menu button */}
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      {/* Icon when menu is closed. */}
      <svg
        className={`${active === false ? "block" : "hidden"} h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      {/* Icon when menu is open */}
      <svg
        className={`${active === true ? "block" : "hidden"} h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
)

const MobileNavMenu = ({ active = false, siteTitle = "" }) => {
  if (!active) return <></>

  return (
    <div className="sm:hidden" id="mobile-menu">
      <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 align">
        <NavLink to="/">{siteTitle}</NavLink>
        <NavLink to="/page-2/">Page 2</NavLink>
        <NavLink to="/using-typescript/">Using TypeScript</NavLink>
      </div>
    </div>
  )
}

const Header = ({ siteTitle }) => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <MobileNavButton active={menuActive} onClick={() => setMenuActive(!menuActive)} />
              <div className="flex-shrink-0 flex items-center">
                <StaticImage
                  className="block h-8 w-8"
                  src="../images/gatsby-icon.png"
                  width={32}
                  height={32}
                  alt="Gatsby Logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <NavLink to="/">{siteTitle}</NavLink>
                  <NavLink to="/page-2/">Page 2</NavLink> <br />
                  <NavLink to="/using-typescript/">Using TypeScript</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileNavMenu active={menuActive} siteTitle={siteTitle} />
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
