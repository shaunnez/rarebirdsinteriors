import React from "react";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import styles from "./masonry.module.scss";
import Image from "next/image";

export default function MasonryComponent({ items, lightboxMode }) {
  const [lightboxImageIdx, setLightboxImageIdx] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {});
  return (
    <>
      <div className={styles.masonry}>
        {items.map((x, i) => (
          <div className={styles.grid} key={i}>
            {lightboxMode ? (
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setLightboxImageIdx(i);
                }}
              >
                <img
                  alt={x.name}
                  src={x.src.replace("/projects/", "/projects-small/")}
                />
              </a>
            ) : (
              <Link href={x.url || `/projects/${i}`}>
                <a>
                  <Image
                    alt={x.name}
                    src={x.src.replace("/projects/", "/projects-small/")}
                    height={x.height}
                    width={x.width}
                  />
                </a>
              </Link>
            )}
          </div>
        ))}
      </div>
      {lightboxImageIdx !== null ? (
        <Lightbox
          mainSrc={items[lightboxImageIdx].src}
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
          nextSrc={
            lightboxImageIdx + 1 === items.length
              ? items[0].src
              : items[lightboxImageIdx + 1].src
          }
          prevSrc={
            lightboxImageIdx - 1 === -1
              ? items[items.length - 1].src
              : items[lightboxImageIdx - 1].src
          }
          onCloseRequest={() => {
            setLightboxImageIdx(null);
          }}
          onMovePrevRequest={() => {
            let newIdx = lightboxImageIdx - 1;
            if (newIdx === -1) {
              newIdx = items.length - 1;
            }
            setLightboxImageIdx(newIdx);
          }}
          onMoveNextRequest={() => {
            let newIdx = lightboxImageIdx + 1;
            if (newIdx === items.length) {
              newIdx = 0;
            }
            setLightboxImageIdx(newIdx);
          }}
        />
      ) : null}
    </>
  );
}
