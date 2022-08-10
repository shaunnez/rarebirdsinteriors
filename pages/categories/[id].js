import React from "react";
import Head from "next/head";

import Layout from "../../components/layout";
import Masonry from "../../components/masonry";
import ourCategories from "../../utils/categories";
import projects from "../../utils/projects";
import styles from "./categories.module.scss";

export default function Category({ category }) {
  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | Categories | {category.name} </title>
        <meta
          name="description"
          content={`Rare Birds Interiors | Categories | ${category.name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{category.name}</h1>
      <Masonry items={projects.flatMap((x) => x.images)} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = ourCategories.map((c) => {
    return { params: { id: c.route } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const category = ourCategories.find((x) => x.route === context.params.id);
  return { props: { category: category } };
}
