import "./App.css";
import MatrimonyRoutes from "./routes/TamilMatrimony.routes";
import LoginRoutes from "./routes/Login.routes";
import { Provider } from "react-redux";
import { Store } from "../src/store/store";
import { auth } from "../src/pages/Authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
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
