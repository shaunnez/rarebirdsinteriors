import React from "react";
import Link from "next/link";

import styles from "./grid.module.scss";

export default function Grid({ items, quad }) {
  console.log(items);
  return (
    <div className={`${styles.grid} ${quad ? styles.quad : ""} grid`}>
      {items.map((x, i) => {
        return (
          <HoverImage
            url={x.url}
            image1={x.image}
            image2={x.image2}
            text={x.text || x.name}
            key={i}
          />
        );
      })}
    </div>
  );
}

const HoverImage = ({ url, image1, image2, text }) => {
  const [src, setSrc] = React.useState(image1);
  return (
    <Link href={url || "/"}>
      <a
        href={url}
        onMouseEnter={(e) => {
          if (image2) setSrc(image2);
        }}
        onFocus={(e) => {
          if (image2) setSrc(image2);
        }}
        onBlur={(e) => {
          if (image2) setSrc(image1);
        }}
        onMouseOut={(e) => {
          if (image2) setSrc(image1);
        }}
      >
        <img src={src} />
        {text ? <label>{text}</label> : null}
      </a>
    </Link>
  );
};
