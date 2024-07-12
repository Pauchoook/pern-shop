import React from 'react';
import {AppRouter} from "./components";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import {Navbar} from "./modules";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AppRouter/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
