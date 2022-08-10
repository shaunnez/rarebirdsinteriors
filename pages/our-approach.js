import React from "react";
import Head from "next/head";

import Layout from "../components/layout";
import styles from "./our-approach.module.scss";
import projectList from "../utils/projects";

export default function WhatWeDo() {
  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | Our Approach</title>
        <meta
          name="description"
          content="Rare Birds Interiors | Our Approach"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Rare Birds Interiors is a highly responsive design studio that
            champions creativity, respects individual style and celebrates
            collaboration.
          </p>

          <p>
            We love the process of design, engaging our team’s creativity and
            including our clients on a personal journey to create spaces that
            thrill them.
          </p>

          <p>
            The artisan, the handmade and sustainability in design are strong
            elements of rarebirds interiors’ ethics, that we strive to weave
            into every project we complete.
          </p>

          <p>
            We believe it is our responsibility to utilise design that provides
            our clients with the opportunity to live life well, in their home
            environment, their workspace or places they intend to share with the
            community.
          </p>

          <p>
            Our design approach draws on the essential elements of texture,
            colour, form and function that is then interpreted with a
            sensitivity to each clients highly individualized brief.
          </p>

          <p>
            This collaboration starts with listening to our clients.
            Understanding expectations from the initial concept design stage
            right through to collaborating on delivering a clients finished
            project, is a strong element to rarebirds interiors’ success.
          </p>
        </div>
      </div>
    </Layout>
  );
}
