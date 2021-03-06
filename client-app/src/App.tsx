import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    let ignore = false;

    axios.get("http://localhost:5000/api/Activites").then((res) => {
      setActivities(res.data);
    });

    return () => {
      ignore = true;
    };
  }, []);
  console.log(activities);

  return (
    <div className="App">
      <Header as="h2" icon="users" content="Reactivities" />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
