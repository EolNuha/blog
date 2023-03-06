import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Tutorials',
    img: require('../../../static/img/tutorials.png').default,
    linkTo: 'tutorials',
  },
  {
    title: 'Posts',
    img: require('../../../static/img/blog.png').default,
    linkTo: 'posts',
  },
];

function Feature({ img, title, linkTo }) {
  return (
    <Link className={clsx('feature')} to={linkTo}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
      <div className="text--center">
        <img src={img} alt={title} />
      </div>
    </Link>
  );
}

const TutorialsList = [
  {
    title: 'Python Data Types',
    img: require('../../../static/img/popular-3.png').default,
    linkTo: 'python/python-data-types',
    description: 'Python is an object-oriented programming language, which means that everything in Python is an object.',
    feature: 'Python',
    featureImg: require('../../../static/img/python-logo.png').default,
  },
  {
    title: 'College Application Process Beginner’s Guide',
    img: require('../../../static/img/popular-2.png').default,
    linkTo: 'posts/college-application-process-beginner-guide',
    description: 'Everything you need to know on college application!',
    feature: 'Blog Post',
    featureImg: require('../../../static/img/blog.png').default,
  },
  {
    title: 'Python Introduction and how to get started',
    img: require('../../../static/img/python-intro.png').default,
    linkTo: 'python/intro',
    description: 'What is Python, and how to use it?',
    feature: 'Python',
    featureImg: require('../../../static/img/python-logo.png').default,
  },
];

function Tutorial({ img, title, description, linkTo, feature, featureImg }) {
  return (
    <Link className={clsx('tutorial')} to={linkTo}>
      <img src={img} alt={title} />
      <div className="tutorial-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='tutorial-feature'>
          <img src={featureImg} alt={feature} />
          <h5>{feature}</h5>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1>Features</h1>
        <div className="grid col-3">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <h1>Most Popular</h1>
        <div className="grid col-3">
          {TutorialsList.map((props, idx) => (
            <Tutorial key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
