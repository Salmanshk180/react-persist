import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./Store";
import Counter from "./Counter";
import { PersistGate } from "redux-persist/integration/react";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <div className="App">
        <Counter />
      </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
