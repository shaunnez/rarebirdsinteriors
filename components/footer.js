import Link from "next/link";

import { menuItems } from "../utils/menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();

            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ↑
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            history.back();
          }}
        >
          Back
        </a>
      </div>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/Rarebirds-Interiors-104863055263103"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 40 }} />
        </a>
        <a
          href="https://www.instagram.com/rare_birds_interiors/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 40 }} />
        </a>
      </div>
    </footer>
  );
}
