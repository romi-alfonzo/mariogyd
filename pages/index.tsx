import type { NextPage } from "next";
import {
  Project,
  Container,
  Experience,
  GradientImage,
  Title,
  Button,
  SocialIcon,
} from "@components";
import styles from "@styles/pages/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import aboutMeImage from "@assets/img/placeholders/about-me.jpg";
import ovalDegrade from "@assets/img/placeholders/oval_degrade.png";
import ovalDegradeBottom from "@assets/img/placeholders/oval_degrade_bottom.png";
import { experiences } from "utils/constants/experiences.constants";
import { projects } from "utils/constants/projects.constants";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Romina Alfonzo | Data Analyst
        </title>
        <meta
          property="description"
          content="Romina Alfonzo es una analista de datos especializada en extraer información clave de conjuntos de datos para impulsar decisiones estratégicas. Utiliza análisis avanzado y herramientas estadísticas para identificar patrones y tendencias, colaborando con equipos para desarrollar soluciones innovadoras."
        />
        <meta
          name="image"
          content="https://rominaportfolio.vercel.app/assets/img/placeholders/dope-website.png"
        />
        <meta
          property="og:title"
          content="Romina Alfonzo | Data Analyst"
          key="title"
        />
        <meta
          property="og:description"
          content="Romina Alfonzo es una analista de datos especializada en extraer información clave de conjuntos de datos para impulsar decisiones estratégicas. Utiliza análisis avanzado y herramientas estadísticas para identificar patrones y tendencias, colaborando con equipos para desarrollar soluciones innovadoras."
        />
        <meta
          name="og:image"
          content="https://rominaportfolio.vercel.app/assets/img/placeholders/dope-website.png"
        />
        <meta name="og:url" content="https://https://rominaportfolio.vercel.app/" />
        <meta name="og:type" content="website" />
      </Head>
      <section
        className={styles.section_header}
        aria-label="Introduction Section"
      >
        <Container size="md">
          <p
            style={{
              fontWeight: 500,
              color: "var(--color-bright-turquoise)",
              marginBottom: 10,
            }}
          >
            Hola mi nombre es,
          </p>
          <h1 className={styles.bigTitle}>
            Romina Alfonzo <br />
            <span className={styles.gradientText}>Data</span>{" "}
            Analyst.
          </h1>
          <p className={styles.description}>
            Soy una analista de datos con sede en Paraguay. Me apasiona el análisis de datos y la
            generación de insights significativos. Utilizo técnicas avanzadas para identificar patrones y
            tendencias, colaborando en el diseño de soluciones innovadoras que optimizan procesos
            y mejoran el rendimiento.
          </p>
        </Container>
      </section>
      <section
        className={styles.section_about_me}
        id="about-me"
        aria-label="About me"
      >
        <Container size="lg">
          <div className="u-hide-sm">
            <Title>About me</Title>
          </div>
          <div className={styles.section_about_container}>
            <div className={styles.section_about_description}>
              <div className="u-hide-md_lg">
                <Title>About me</Title>
              </div>
              <p>
                ¡Hola! Soy Romina, estudiante de tesis de la carrera de Ingeniería en Infomática, mi enfoque principal es el
                analisis de datos, desde la constucción del ETL hasta visualizaciones para su mejor comprensión.
                <br />
                <br /> Hasta ahora he trabajado en proyectos enfocados al análisis y también desarrollo de aplicaciones de web
                <br />
                <br /> He trabajado en diversos productos como Análisis de datos públicos, parsers de pdf, scraping de páginas web;
                
                y también en procesos de scraping de taps. Codificando en python con librerías como pandas, skitlearn, keras.
                <br />
                <br /> Por ahora, mi enfoque actual e la visualización de datos a travéz de herramientas como PowerBi y Tableau.
              </p>
            </div>
            <div>
              <GradientImage src={aboutMeImage} alt="About Me Image" />
            </div>
          </div>
          <SocialIcon type="twitter" href="https://twitter.com/romi_alfonzo" />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon
            type="linkedin"
            href="https://www.linkedin.com/in/romi-alfonzo/"
          />
          &nbsp;&nbsp;&nbsp;
          <SocialIcon type="github" href="https://github.com/romi-alfonzo" />
        </Container>
      </section>
      <section
        className={styles.section_works}
        id="experience"
        aria-labelledby="experience-title"
      >
        <Container size="sm">
          <Title id="experience-title">He trabajado en</Title>
          <div className={styles.section_works__experience}>
            {experiences.map((work) => {
              return <Experience key={work.company + work.start} {...work} />;
            })}
          </div>
        </Container>
      </section>
      <section
        className={styles.section_projects}
        id="work"
        aria-labelledby="work-title"
      >
        <Container size="sm">
          <Title id="work-title">Algunas cosas que he desarrollado</Title>
        </Container>
        <Container size="lg">
          <div className={styles.section__projects_container}>
            {projects.map((project, index) => (
              <div className={styles.project} key={index + project.title}>
                <Project is={index % 2 === 0 ? "even" : "odd"} {...project} />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section
        className={styles.section_contact}
        id="contact"
        aria-labelledby="contact-title"
      >
        <Container size="lg">
          <h2 id="contact-title">Estemos en</h2>
          <p>
          Siempre estoy abierta a nuevas oportunidades. Si tienes alguna pregunta o duda, 
          no dudes en enviarme un correo electrónico 
          ¡Te responderé pronto!
          </p>
          <Button href="mailto:romi.alfonzo99@gmail.com">Hablemos</Button>
        </Container>
        <div className="u-hide-sm">
          <div className={styles.section_contact_bg_img}>
            <Image src={ovalDegrade} alt="" />
          </div>
        </div>
        <div className="u-hide-md_lg">
          <Image src={ovalDegradeBottom} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
