import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const TutorialsList = [
  {
    title: 'Python Tutorial',
    img: require('../../../static/img/python.jpg').default,
    linkTo: 'python/intro',
    description: 'Python tutorials, learn the basics of python programming.',
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

export default function HomepageTutorials() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="grid col-3">
          {TutorialsList.map((props, idx) => (
            <Tutorial key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
