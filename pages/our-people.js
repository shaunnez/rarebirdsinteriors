import React from "react";
import Head from "next/head";

import Layout from "../components/layout";
import Grid from "../components/grid";
import peopleList from "../utils/people";
import styles from "./our-people.module.scss";

export default function OurPeople() {
  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | Our People</title>
        <meta name="description" content="Rare Birds Interiors | Our People" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Our People</h1>
          <div className={styles.gridWrapper}>
            <Grid items={peopleList} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
