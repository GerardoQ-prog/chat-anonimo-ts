import { Provider } from "react-redux";
import AppRoutes from "./routes";
import store from "./store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./assets/styles/global";
import styledDefault from "./assets/styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={styledDefault}>
      <GlobalStyle />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
