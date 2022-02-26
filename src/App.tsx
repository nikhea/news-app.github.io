import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./components/styles/Global";
import "./App.css";
import News from "./container/News";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <News/>
      </>
    </ThemeProvider>
  );
}
export default App;
