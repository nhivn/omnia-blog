import nightOwl from "@theme-ui/prism/presets/night-owl.json";
import { deep } from "@theme-ui/presets";

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
    ...nightOwl
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
    bg: "primary",
    borderLeftColor: "secondary",
    borderLeft: "1px solid secondary",
    opacity: 0.8,
    "&.translation": {
      fontSize: "1em"
    }
  }
};
