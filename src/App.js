import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
function App() {
  const [initialData, setData] = useState();
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
  }, []);
  return <div className="App">{initialData && <Card {...initialData} />}</div>;
}

export default App;
