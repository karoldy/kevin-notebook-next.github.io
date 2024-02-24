import { useRouter } from "next/router";

const config = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
  logo: <span>Notebook</span>,
  project: {
    link: "https://github.com/karoldy/kevin-notebook-next",
  },
  search: {
    placeholder: "Search",
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    // extraContent: <ExtraContent />,
  },
  docsRepositoryBase: 'https://github.com/karoldy/kevin-notebook-next.github.io/blob/master',
  feedback: { content: null },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "Notebook",
      };
    }

    return {
      titleTemplate: "%s - Notebook",
    };
  },
  gitTimestamp: null,
  footer: true,
  footer: {
    text: (
      <span>
        <a
          href="https://github.com/karoldy/kevin-notebook-next/blob/master/LICENSE"
          target="_blank"
        >
          MIT License - Copyright (c) 2024
        </a>
      </span>
    ),
  }
};

export default config;