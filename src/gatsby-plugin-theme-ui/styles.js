import dracula from "@theme-ui/prism/presets/dracula.json";

export default {
  root: {
    fontFamily: "body"
  },
  pre: {
    variant: "prism",
    fontFamily: "monospace",
    tabSize: 4,
    hyphens: "none",
    marginBottom: 2,
    color: "white",
    bg: "prism.background",
    overflow: "auto",
    borderRadius: 10,
    p: 3,
    ...dracula
  },
  code: {
    fontFamily: "monospace",
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: "inherit"
  },
  inlineCode: {
    borderRadius: "0.3em",
    color: "secondary",
    bg: "highlight",
    paddingTop: "0.15em",
    paddingBottom: "0.05em",
    paddingX: "0.2em"
  },
  // from typography overrideThemeStyles
  a: {
    color: "primary"
  },
  hr: {
    borderColor: "muted"
  },
  p: {
    code: {
      fontSize: "inherit"
    }
  },
  li: {
    code: {
      fontSize: "inherit"
    }
  },
  blockquote: {
    color: "inherit",
    borderLeft: "5px solid",
    borderColor: "primary",
    borderRadius: 4,
    paddingLeft: 20,
    fontWeight: 200,
    fontSize: "1.2em",
    "font-style": "italic",
    opacity: 0.8,
    "&.translation": {
      fontSize: "1em"
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },
};
