import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import Masonry from "../../components/masonry";
import ourProjects from "../../utils/projects";

import styles from "./projects.module.scss";

export default function Projects({ project }) {
  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | Projects | {project.name}</title>
        <meta
          name="description"
          content={`Rare Birds Interiors | Projects | ${project.name}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p style={{ textTransform: "capitalize " }}>{project.name}</p>

      <div>
        <Masonry items={project.images} lightboxMode={true} />
      </div>
      {/* <div className={styles.content}>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, ut sunt. Laborum distinctio qui perferendis quaerat
            corporis pariatur hic laboriosam libero odit, temporibus sequi est
            aperiam necessitatibus earum blanditiis numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, ut sunt. Laborum distinctio qui perferendis quaerat
            corporis pariatur hic laboriosam libero odit, temporibus sequi est
            aperiam necessitatibus earum blanditiis numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, ut sunt. Laborum distinctio qui perferendis quaerat
            corporis pariatur hic laboriosam libero odit, temporibus sequi est
            aperiam necessitatibus earum blanditiis numquam.
          </p>
        </div>
      </div> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = ourProjects.map((c) => {
    return { params: { id: c.route } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const project = ourProjects.find((x) => x.route === context.params.id);
  return { props: { project: project } };
}
