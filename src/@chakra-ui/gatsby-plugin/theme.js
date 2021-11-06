import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: "montserrat",
    body: "roboto-mono",
  },
}

const theme = extendTheme({ config })

export default theme