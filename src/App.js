import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import getUsers from "./Api";
import "./App.css";

function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  const handleFilter = (input) => {
    
    let filtered = initialUsers.filter((user) => {
      console.log(user.name.first)   
      return user.name.first.toLowerCase().includes(input.toLowerCase())
    })

    updateUsersToRender(filtered)
  }

  useEffect(() => {
    getUsers()
    .then(({ data: { results } }) => {
      console.log(results) 
    updateAvailableUsers(results)
    updateUsersToRender(results)
  });
  }, []);

  return (
    
    <div className="App">
      {console.log(usersToRender)}
      <h1>Employee Directory</h1>
      <p>
        You can filter by first name if you type into the user input box below
      </p>
      <FilterInput handleFilter={handleFilter} users={initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} />
    </div>
  );
}

export default App;