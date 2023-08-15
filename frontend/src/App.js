import './App.css';
import Dashboards from './componants/Dashboards';
import Login from './componants/login';
import React, { useEffect, useState } from 'react';


function App() {

  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      {!token && <Login />}
      {token && <Dashboards/>}
    </>
  );
}

export default App;
