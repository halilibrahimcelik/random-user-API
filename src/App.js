import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
function App() {
  const [initialData, setData] = useState();
  const url = "https://randomuser.me/api/";
  const getData = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Card {...initialData} />
    </div>
  );
}

export default App;
