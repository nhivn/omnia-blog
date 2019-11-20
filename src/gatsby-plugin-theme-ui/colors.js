import { future, deep } from "@theme-ui/presets"
import shadesOfPurple from '@theme-ui/prism/presets/shades-of-purple.json'

export default {
  ...future.colors,
  modes: {
    dark: {
      ...deep.colors
    },
  },
}
