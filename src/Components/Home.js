import React from "react";
import Navigation from "./Navigation";
import "./home.css";
function Home() {
  const users = [
    { user: "test1", date: "4:00PM 09/13/2021", done: true },
    { user: "test2", date: "4:00PM 09/13/2021", done: false },
    { user: "test3", date: "4:00PM 09/13/2021", done: true },
    { user: "test4", date: "4:00PM 09/13/2021", done: false },
    { user: "test5", date: "4:00PM 09/13/2021", done: true },
  ];
  return (
    <>
      <Navigation />
      <div className="home-container">
        <h1>New Questions</h1>
        <div className="card-container">
          {users.map((u) =>
            !u.done ? (
              <div className="card">
                {u.user} <p>{u.date}</p>
                <button>Show</button>
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="done-container">
        <h1>Done</h1>
        <div className="card-container">
          {users.map((u) =>
            u.done ? (
              <div className="card">
                {u.user} <p>{u.date}</p>
                <button>Show</button>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
