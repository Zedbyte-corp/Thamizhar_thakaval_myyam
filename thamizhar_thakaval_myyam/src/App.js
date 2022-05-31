import "./App.css";
import MatrimonyRoutes from "./routes/TamilMatrimony.routes";
import LoginRoutes from "./routes/Login.routes";
import { Provider } from "react-redux";
import { Store } from "../src/store/store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <LoginRoutes />
        <MatrimonyRoutes />
      </Provider>
    </>
  );
}

export default App;
