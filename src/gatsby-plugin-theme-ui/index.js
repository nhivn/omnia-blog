import merge from "deepmerge";
import prism from "@theme-ui/prism/presets/theme-ui";
import typography from "./typography";
import colors from "./colors";
import styles from "./styles";

export default merge(typography, {
  initialColorMode: "light",
  colors,
  sizes: {
    container: 672
  },
  styles,
  prism,
  fonts: {
    monospace:
      "Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace"
  }
});
