import React from "react";
import Head from "next/head";

import Masonry from "../components/masonry";
import Grid from "../components/grid";
import Layout from "../components/layout";
import projects from "../utils/projects";
import ourStudio from "../public/images/our-studio.jpg";

import styles from "./our-studio.module.scss";

export default function OurStudio() {
  const benson = projects.find((x) => x.route === "benson-road");

  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | Our Studio</title>
        <meta name="description" content="Rare Birds Interiors | Our Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid
        items={[
          {
            url: "/our-approach",
            image: "/images/HEADING - OUR APPROACH.png",
          },
          {
            url: "/what-we-do",
            image: "/images/HEADING - WHAT WE DO.png",
          },
          {
            url: "/our-process",
            image: "/images/HEADING - OUR PROCESS.png",
          },
          {
            url: "/our-people",
            image: "/images/HEADING - OUR TEAM.png",
          },
        ]}
      />

      <img src={ourStudio.src} style={{ width: "100%" }} />
    </Layout>
  );
}
