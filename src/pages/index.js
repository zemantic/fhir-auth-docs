import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="hero" style={{ height: "25rem" }}>
      <div className="container">
        <div className="row">
          <div className="col col--8">
            <h1 className="hero__title">Documentation</h1>
            <p className="hero__subtitle">
              Learn how to setup and use FHIR Auth
            </p>
            <div>
              <a
                href="/docs/introduction"
                className="button button--primary button-flat button--lg"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="col col--4">
            <img src="./img/book.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
