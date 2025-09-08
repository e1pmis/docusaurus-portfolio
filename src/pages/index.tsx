import React, { JSX } from 'react';
import Layout from '@theme/Layout';

import Header from '@site/src/components/header';
import Hero from '@site/src/components/hero';
import MySkills from '@site/src/components/my-skills';
import ProjectHighlights from '@site/src/components/project-highlights';
import Contact from '@site/src/components/contact';
import Footer from '@site/src/components/footer';

import styles from './Home.module.css';

export default function Home() {
  return (
    <Layout wrapperClassName={styles.page}>
      <Header />
      <Hero />
       <MySkills />
     <ProjectHighlights />
      <Contact />
      <Footer />
    </Layout>
  );
}