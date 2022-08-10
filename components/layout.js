import React from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  React.useEffect(() => {
    document.querySelectorAll("main img").forEach((ele, i) => {
      setTimeout(() => {
        ele.style.opacity = 1;
      }, 50 * i);
    });
  }, []);
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
