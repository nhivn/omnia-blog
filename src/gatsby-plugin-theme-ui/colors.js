import { swiss, deep } from "@theme-ui/presets";
import { darken, lighten, shade } from "polished";

export default {
  ...swiss.colors,
  text: "#000",
  background: "#feffff",
  primary: shade(0.05, "rgb(0, 209, 178)"),
  secondary: lighten(0.1, "hsl(348, 100%, 61%)"),
  highlight: "#feffff",
  modes: {
    dark: {
      ...deep.colors
    }
  }
};
