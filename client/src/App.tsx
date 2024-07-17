import React, {useEffect} from 'react';
import {AppRouter} from "./components";
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./modules";
import {useAppDispatch} from "./hooks/reducer";
import {check} from "./store/reducers/user/ActionsCreators";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(check());
  }, []);

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
