import { ThemeProvider } from "styled-components";
import { Home } from "./screens/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { TaskContextProvider } from "./context/TaskContext";

export function App() {

  return (
    <TaskContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </TaskContextProvider>
  )
}
