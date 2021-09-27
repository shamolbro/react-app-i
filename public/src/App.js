import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Body from "./components/body/Body.js";

function App() {
  // States
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  //Load data
  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);

  //Event Handler
  function eventHandler(selected) {
    const isMatching = selectedMembers.find(
      (member) => member.id === selected.id
    );
    if (!isMatching) {
      const newSelectedMembers = [...selectedMembers, selected];
      setSelectedMembers(newSelectedMembers);
    }
  }

  return (
    <div>
      <Header></Header>
      <Body
        selectedMembers={selectedMembers}
        eventHandler={eventHandler}
        members={members}
      ></Body>
    </div>
  );
}

export default App;
