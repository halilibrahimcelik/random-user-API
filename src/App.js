import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Wrapper from "./components/UI/Wrapper";
function App() {
  const [initialData, setData] = useState();
  const [changeUser, setChangeUser] = useState(false);
  const url = "https://randomuser.me/api/";
  const getData = async () => {
    try {
      const { data } = await axios.get(url);

      console.log(data);
      setData(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [changeUser]);
  return (
    <div className="App">
      {initialData && <Wrapper {...initialData} changeUser={setChangeUser} />}
    </div>
  );
}

export default App;
