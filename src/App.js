import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [usersState, setUsersState] = useState([]);

  useEffect(() => {
    fetch("https://61acefffd228a9001703ac7e.mockapi.io/api/v1/users")
      .then((res) => res.json())
      .then((users) => {
        setUsersState(users);
      });
  }, []);

  return (
    <div className="App">
      <ul>
        {usersState.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
