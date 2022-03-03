import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./components/styles/Global.style";
import "./App.css";
import Header from "./layouts/Header";
import { Routs } from "./Routs";
import Slider from "./components/UI/Slider"
const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Slider/>
        <Routs />
      </>
    </ThemeProvider>
  );
};
export default App;
