import { extendTheme } from "@chakra-ui/react"


const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}


const theme = extendTheme({
  config,
  initialColorMode: "dark",
  useSystemColorMode: true,
  colors: {
    white: {
      900: "#ffffffdb"
    },
    gray: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#222222"
    }
  }
})

export default theme