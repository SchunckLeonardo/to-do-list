import { ThemeProvider } from "styled-components";
import { Home } from "./screens/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/themes/defaultTheme";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}
