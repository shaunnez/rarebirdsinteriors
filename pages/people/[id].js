import React from "react";
import Head from "next/head";

import Layout from "../../components/layout";
import ourPeople from "../../utils/people";

import styles from "./people.module.scss";

export default function People({ person }) {
  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | People</title>
        <meta name="description" content="Rare Birds Interiors | Our People" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <img src={person.image} />

        <div>
          <h1>
            <b>{person.name}</b>
          </h1>
          <h2>{person.role}</h2>
          <div dangerouslySetInnerHTML={{ __html: person.description }} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = ourPeople.map((c) => {
    return { params: { id: c.route } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const person = ourPeople.find((x) => x.route === context.params.id);
  return { props: { person: person } };
}
