import React from "react";
import styles from "@styles/components/Project.module.css";
import Image from "next/image";
import { Button, GradientImage } from "@components";

type ProjectProps = {
  is: "even" | "odd";
  title: string;
  number: string;
  languages: string[];
  description: string;
  cta: string;
  imageSource: string | StaticImageData;
  ariaLabelLink: string;
  altImage: string;
};

const Project: React.FC<ProjectProps> = ({
  is,
  title,
  imageSource,
  number,
  languages,
  description,
  cta,
  ariaLabelLink,
  altImage,
}) => {
  const image = (
    <div
      className={`${styles.project__image} ${
        is === "odd" ? styles.project__right_aligned : ""
      }`}
    >
      <a href={cta} target="_blank" rel="noreferrer">
        <GradientImage
          src={imageSource}
          alt={altImage}
          rotate={is == "even" ? "left" : "right"}
        />
      </a>
    </div>
  );

  const content = (
    <div
      className={`${styles.project__content} ${
        is === "even" ? styles.project__right_aligned : ""
      }`}
    >
      <div className={styles.project__number}>{number}</div>
      <p className={styles.project__featured}>Featured Project</p>
      <h3>
        <a href={cta} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <p className={styles.project__languages}>
        Languages: <span>{languages.join(", ")}</span>
      </p>
      <p className={styles.project__description}>{description}</p>
      <Button
        className={styles.project__cta}
        href={""}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabelLink}
      >
        See Project
      </Button>
    </div>
  );

  return (
    <div className={styles.project}>
      {is === "even" ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
};

export default Project;
