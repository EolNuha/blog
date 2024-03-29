import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HomepageTutorials from '@site/src/components/TutorialspageFeatures';

import styles from './index.module.css';

const img = require('../../static/img/logo-short-white.png').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.heroTitle)}><img src={img} alt="Logo short" className={styles.homePageLogo} /> THE INNOHIVE</h1>
        <p className={clsx("hero__subtitle", styles.heroSubtitle)}>Tutorials</p>
      </div>
    </header>
  );
}

export default function Tutorials() {
  return (
    <>
      <Head>
        <body className="tutorialspage homepage" />
      </Head>
      <Layout
        title={`Tutorials`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <main>
          <HomepageTutorials />
        </main>
      </Layout>
    </>
  );
}
