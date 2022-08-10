import React from "react";
import Link from "next/link";

import { menuItems } from "../utils/menu";

import styles from "./header.module.scss";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header
      className={`${styles.header} ${open ? styles.open : styles.closed}`}
    >
      <div className={styles.logo}>
        <Link href="/">
          <a href="#" className={styles.logoLink}>
            <img src="/images/logo.png" />
          </a>
        </Link>
      </div>
      <div className={styles.flexSpacer} />
      <div className={styles.menu}>
        {menuItems.map((item, i) => (
          <div className={styles.menuItem} key={i}>
            <Link href={item.url}>{item.name}</Link>
          </div>
        ))}
      </div>

      {!open && (
        <div className={styles.mobileMenu}>
          <a
            href="#"
            onClick={(e) => {
              document.querySelector("body").classList.add("open");
              e.preventDefault();
              setOpen(true);
            }}
          >
            <svg viewBox="0 0 42 60" width="50" height="42">
              <rect y="0" width="50" height="2" fill="#333"></rect>
              <rect y="16" width="50" height="2" fill="#333"></rect>
              <rect y="32" width="50" height="2" fill="#333"></rect>
            </svg>
          </a>
        </div>
      )}

      <div
        className={`${styles.splashMenu} ${open ? styles.open : styles.closed}`}
      >
        {menuItems.map((item, i) => (
          <div
            className={styles.splashMenuItem}
            key={i}
            onClick={() => {
              document.querySelector("body").classList.remove("open");
            }}
          >
            <Link href={item.url}>{item.name}</Link>
          </div>
        ))}
      </div>

      {open && (
        <a
          href="#"
          className={styles.closeLink}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("body").classList.remove("open");
            setOpen(false);
          }}
        >
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="24px"
            height="24px"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </a>
      )}
    </header>
  );
}
