import React from "react";
import Head from "next/head";

import splash from "../public/images/splash.png";
import logoSplash from "../public/images/logo-splash.png";

import Masonry from "../components/masonry";
import Layout from "../components/layout";
import projects from "../utils/projects";
import styles from "./index.module.scss";

export default function Home({ data }) {
  const [showSplash, setShowSplash] = React.useState(true);
  const images = [];

  for (let i = 0; i < 14; i++) {
    projects.forEach((project) => {
      if (project.images[i]) {
        images.push(project.images[i]);
      }
    });
  }
  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors</title>
        <meta name="description" content="Rare Birds Interiors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {showSplash && (
        <div
          className={styles.splash}
          style={{
            backgroundImage: `url(${splash.src})`,
          }}
        >
          <a
            href="#"
            style={{
              backgroundImage: `url(${logoSplash.src})`,
            }}
            onClick={(e) => {
              e.preventDefault();
              setShowSplash(false);
              setTimeout(() => {
                document.querySelectorAll("main img").forEach((ele, i) => {
                  setTimeout(() => {
                    ele.style.opacity = 1;
                  }, 50 * i);
                });
              }, 0);
            }}
          />
        </div>
      )}

      {!showSplash && <Masonry items={images} />}
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   const result = await fetch("http://localhost:3000/api/files");
//   const json = await result.json();
//   return { props: { data: json } };
// }
