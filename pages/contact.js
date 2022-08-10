import React from "react";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import splash from "../public/images/splash.png";

import Layout from "../components/layout";
import styles from "./contact.module.scss";

export default function OurApproach() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [hasError, setHasError] = React.useState(false);

  const form = React.useRef();

  return (
    <Layout>
      <Head>
        <title>Rare Birds Interiors | Contact</title>
        <meta name="description" content="Rare Birds Interiors | Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <h1>Contact Us</h1>

        <div
          className={styles.hero}
          style={{
            backgroundImage: `url(${splash.src})`,
          }}
        />

        <div className={styles.grid}>
          <div className={styles.gmapCanvas}>
            <iframe
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1596.2232343756598!2d174.73867533055613!3d-36.85573077359189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bf7b06304ff5f8!2sRare%20Birds%20Interiors!5e0!3m2!1sen!2snz!4v1660116450450!5m2!1sen!2snz"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
          <form
            id="form"
            ref={form}
            onSubmit={(event) => {
              event.preventDefault();
              if (
                !firstName ||
                !lastName ||
                !email ||
                !phoneNumber ||
                !message
              ) {
                setHasError(true);
                return;
              }

              emailjs
                .sendForm(
                  "service_5cy3o0k",
                  "template_9oz1czg",
                  document.getElementById("form"),
                  "tDxf7rfkIWs8Cl8oN"
                )
                .then(
                  (result) => {
                    console.log(result.text);
                  },
                  (error) => {
                    console.log(error.text);
                  }
                );
            }}
          >
            <div className={styles.address}>
              <p>
                Contact us via the form below or call{" "}
                <a href="tel:+64021323667">+ 64 (0)21 323 667</a>
              </p>
            </div>

            <div className="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                required
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <div className="field">
              <label>Message</label>
              <textarea
                required
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <button type="submit">Send us a mesage!</button>

            <div
              className={styles.errorBox}
              style={{ opacity: hasError ? 1 : 0 }}
            >
              <p>
                Oh oh, there was a problem. Please make sure you have entered in
                valid information before clicking send!
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

// import React, { useRef } from 'react';

// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
