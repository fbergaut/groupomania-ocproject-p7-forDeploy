import React, { useState, useEffect } from 'react';
import { UidContext } from './components/AppContext';
import Routes from "./components/routes";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { getUser } from './actions/userActions';

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async() => {

      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}/jwtid`,
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setUid(res.data);
      })
      .catch((err) => console.log("Aucun token trouvé !"));
    }
    fetchToken();
    if(uid) dispatch(getUser(uid))
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
