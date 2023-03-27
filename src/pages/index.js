import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const img = require('../../static/img/logo-short-white.png').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.heroTitle)}><img src={img} alt="Logo short"  className={styles.homePageLogo} /> THE INNOHIVE</h1>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>Blogs</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <Head>
        <body className="homepage" />
      </Head>
      <Layout
        title={`Homepage`}
        description="The Innohive is a programming tutorial blog that offers helpful information and practical examples for beginners and experienced programmers. We make sure to keep you up with the trends of the tech world!">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}
