import React from 'react';
import Logo from '@theme-original/Navbar/Logo';
import Link from '@docusaurus/Link';
import { useLocation } from 'react-router-dom'
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function LogoWrapper(props) {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();
  const isHome = location.pathname === siteConfig.baseUrl || location.pathname === `${siteConfig.baseUrl}tutorials`;
  return (
    <>
      <Link to={siteConfig.baseUrl} className="navbar__logo">
        <img className='navbar-logo' src={
          isHome ? 
            require('../../../../static/img/logo-left-white.png').default : 
            require('../../../../static/img/logo-left-black.png').default} 
        />
      </Link>
    </>
  );
}
