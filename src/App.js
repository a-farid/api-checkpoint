import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Handle the successful response
        console.log(setUsers(response.data));
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [])
  console.log(users);
  return <div className="App">
    <h1>
    Users app:
    </h1>
    <div className="users">
      {users.map(user=>{
        return <User key={user.id}
        {...user}/>
      })}
    </div>

    </div>;
}

export default App;
