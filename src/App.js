import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import firebase, { FirebaseContext } from "./firebase/index";
import useAuth from "./components/Auth/useAuth";
import routes, { renderRoutes } from "./routes";
import "./App.css";
function App() {
  const user = useAuth();

  return (
    <Router>
      <Provider store={store}>
        <FirebaseContext.Provider value={{ user, firebase }}>
          {renderRoutes(routes)}
        </FirebaseContext.Provider>
      </Provider>
    </Router>
  );
}

export default App;
