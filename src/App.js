import Body from "./components/Body.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { useState } from "react";

function App() {
  const[isLogin, setLogin] = useState(false)
  return (
    <Provider store={appStore}>
      <Body isLogin={isLogin} setLogin={setLogin}/>
    </Provider>
  );
}

export default App;