import React from "react";
import Head from "next/head";

import Masonry from "../components/masonry";
import Grid from "../components/grid";
import Layout from "../components/layout";
import categoryList from "../utils/categories";
import projects from "../utils/projects";
import styles from "./our-studio.module.scss";

export default function OurStudio() {
  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | Our Work</title>
        <meta name="description" content="Rare Birds Interiors | Our Work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className={styles.gridContainer}>
        <Grid items={categoryList} quad />
      </div> */}
      <Masonry items={projects.flatMap((x) => x.images[0])} />
    </Layout>
  );
}
