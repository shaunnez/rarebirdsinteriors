import React from "react";
import Head from "next/head";

import Layout from "../components/layout";
import projectList from "../utils/projects";
import styles from "./what-we-do.module.scss";

export default function WhatWeDo() {
  const raglanImage = projectList.find((x) => x.route === "wainui-road")
    .images[0].src;
  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | What we do</title>
        <meta name="description" content="Rare Birds Interiors | What we do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <div className={styles.text}>
          <h1>What we do</h1>
          <p>
            Established by experienced interior designers, Kelly Gammie and Sean
            Monk, Rarebirds Interiors is a dynamic full end to end design studio
            offering flexible and creative interior design services. The
            Rarebirds team craft bespoke kitchens, bathrooms and full interiors
            that are sympathetic to the brief and the architectural envelope.
            Sean, Kelly and their team are continually interested in creating
            spaces that express individual style and pragmatic functionality.
            Both designers have lived and worked in Europe, North America and
            Asia and bring this experience to their love of the New Zealand
            lifestyle and its architecture. Rarebirds believe the design process
            should be collaborative and enjoyable from initial concept stage
            right through to your designs being executed as imagined. The
            Rarebirds studio and showroom situated in a Grey Lynn villa,
            provides an immersive design experience. Viewing and selecting
            materials, discussing spatial planning and design details, can all
            be done while relaxing with a cup of coffee or a glass of bubbles.
          </p>
          <h2>Concepts</h2>
          <p>
            As qualified designers, Rarebirds can help you with clarity and
            vision turning your ideas into reality, creating beautiful and
            functional spaces.
          </p>
          <h2>BATHROOM & KITCHEN DESIGNS</h2>
          <p>
            Craft new spatial layouts, specify colours, materials and fittings,
            have your cabinetry custom made and even help make it all happen
            with a team of experienced tradespeople.
          </p>
          <h2>INTERIOR DESIGN</h2>
          <p>
            Create new colour schemes to include paint, wallpaper, flooring,
            fabrics and furnishings with documentation to help you visualise
            your new spaces.
          </p>
          <h2>FURNITURE & ACCESSORIES</h2>
          <p>
            Complete room design from Rarebirds bespoke furniture or trade
            suppliers at designer prices. Rugs, cushions, throws, art curation,
            ceramics and plants, all the finishing touches to create your
            distinct style.
          </p>
          <h2>WINDOW TREATMENTS </h2>
          <p>
            Fabric selection and supply for custom curtains and roman blinds,
            specification and supply of shutters and blinds ensuring they
            enhance your interior look.
          </p>
          <h2>LIGHTING</h2>
          <p>
            Lighting plans, specification and supply of stunning feature lights
            and functional task lighting through trade suppliers at designer
            prices
          </p>
          <h2>EXTERIOR SPECIFICATIONS</h2>
          <p>
            Colour pallets and materials including paint & stains, roofing,
            joinery and can help with great landscaping services all to
            co-ordinate harmonious with your interior spaces,
          </p>
        </div>

        <img src={raglanImage} alt="What we do" />
      </div>
    </Layout>
  );
}
