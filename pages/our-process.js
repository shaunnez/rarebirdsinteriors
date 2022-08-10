import React from "react";
import Head from "next/head";

import Layout from "../components/layout";
import projectList from "../utils/projects";
import styles from "./what-we-do.module.scss";

export default function WhatWeDo() {
  const raglanImage = projectList.find((x) => x.route === "jervois-road")
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
          <h1>OUR PROCESS</h1>
          <h2>WHY YOU SHOULD USE OUR SERVICE</h2>
          <h3>WE COLLABOARTE WITH YOU</h3>
          <p>
            To create an inspiring home that expresses your style and that you
            will love to live in{" "}
          </p>
          <h3>WE SAVE YOU TIME & REDUCE STRESS</h3>
          <p>
            Building and renovating can be overwhelming so the Rarebirds team
            will help you through the process, filter choices, create clear
            vison & direction and even wrangle tradespeople to ensure your
            project is completed to suit you.
          </p>
          <h3>WE SAVE YOU MONEY</h3>
          <p>
            Our team will guide you through decisions and selections avoiding
            costly mistakes. We share our trade discount structure with you
            enabling a better spend level on your project.
          </p>
          <h3>WE HAVE EXPERT CONTACTS</h3>
          <p>
            Year of experience in this industry has enabled us to establish
            trusted relationships with other design professionals, tradespeople,
            wholesalers and suppliers to know where to source what you need and
            make the process more time and cost effective.
          </p>
          <h3>WE ARE GREAT AT WHAT WE DO</h3>
          <p>
            Experienced, qualified and award winning, the Rarebirds Interiors
            team take our job of making your home stunning, seriously.
          </p>
          <h3>INITIAL DESIGN MEETING</h3>
          <p>
            An initial complementary meeting with Sean and Kelly at the
            Rarebirds Design Studio is the opportunity for us to understand what
            you need for your project.{" "}
          </p>
          <p>
            We will listen to your requirements and create a project brief with
            you. A transparent Design Services Proposal which will include one,
            some or all of the below Stages is then sent to you for your
            consideration and approval.
          </p>
          <h3>DESIGN CONCEPT</h3>
          <p>
            The Rarebirds concept service provides inspiration and clarity for a
            bathroom, a kitchen or a complete interior project and is the first
            step in your renovation or building journey.{" "}
          </p>
          <p>
            Your concept document will be crafted to combine sketches, suggested
            materials, fittings, fixtures, colour palette and spatial planning
            to help you visualise your new space.{" "}
          </p>
          <p>
            Rarebirds will email you this document to digest before your second
            meeting either in our studio or remotely if required.{" "}
          </p>
          <p>
            The concept design document is the ideal starting point for further
            development with Rarebirds, or the confidence with your design
            direction if you are taking on the challenge yourself.{" "}
          </p>
          <h3>DESIGN DEVELOPMENT</h3>
          <p>
            Rarebirds analyse the feedback from your concept and expand your
            design to include elevations and fine tune your specification of
            colour, materials and fittings.{" "}
          </p>
          <p>
            We love to create our designs freehand up to this point and welcome
            your collaboration before we present you with the final design for
            your approval.{" "}
          </p>
          <p>
            Formalised CAD files will now be created and sent to various crafts
            people to enable us to provide you with a transparent costings for
            your project.
          </p>
          <p>
            During this stage of the design process Rarebirds can engage an
            architect, engineer or draughtsperson on your behalf to obtain any
            consents that may be required.{" "}
          </p>
          <p>
            Design Development will provide you with the confidence and concise
            documentation for your own construction team or you can utilise
            Rarebirds to co-ordinate the project for you.
          </p>
          <h3>CO-ORDINATION</h3>
          <p>
            The Rarebirds Design Co-ordination Serviceis ideal our clients who
            have their own team of tradesmen, but still require design support
            and access to product discounts.{" "}
          </p>
          <p>
            We can also complement your build team with specialised trades such
            as cabinetmakers, stone fabricator, tilers and glass installers.{" "}
          </p>
          <p>
            Our designers will conduct regular site visits at essential
            construction points which allows you to have peace of mind that your
            final design is executed on site correctly.{" "}
          </p>
          <p>
            The Rarebirds co-ordination service offers a saving on product up to
            off 25% RRP.{" "}
          </p>
          <h3>DESIGN MANAGEMENT</h3>
          <p>
            If you are time poor or the idea of renovating or building is far
            too confronting, Rarebirds can complete the project for you.{" "}
          </p>
          <p>
            Rarebirds can supply a full team of experienced and reliable
            tradespeople appropriate to your individual project to execute the
            your intended design vision.{" "}
          </p>
          <p>
            You will be assigned a Rarebirds project co-ordinator who will keep
            you briefed throughout the construction process.{" "}
          </p>
          <p>
            The design management stage allows the Rarebirds team to help make
            the construction process as easy as possible for you.{" "}
          </p>
        </div>

        <img src={raglanImage} alt="What we do" />
      </div>
    </Layout>
  );
}
