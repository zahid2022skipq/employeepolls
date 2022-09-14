import React, { useState } from "react";
import Navigation from "./Navigation";
import "./home.css";

const users = [
  {
    user: "test1",
    date: "4:00PM 09/13/2021",
    done: true,
    image: "../Assets/gamer.png",
  },
  {
    user: "test2",
    date: "4:00PM 09/13/2021",
    done: false,
    image: "../Assets/manager.png",
  },
  {
    user: "test3",
    date: "4:00PM 09/13/2021",
    done: true,
    image: "../Assets/gamer.png",
  },
  {
    user: "test4",
    date: "4:00PM 09/13/2021",
    done: false,
    image: "../Assets/manager.png",
  },
  {
    user: "test5",
    date: "4:00PM 09/13/2021",
    done: true,
    image: "../Assets/manager.png",
  },
];

const Dashboard = (props) => {
  const close = () => {
    props.close();
  };
  return (
    <div className="dashboard">
      <h1>Polls by {props.name}</h1>
      <img src={props.image} height={100} width={100} alt="profile" />
      <button onClick={close}>Close</button>
    </div>
  );
};

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const [name, setName] = useState("");
  const [img, setImage] = useState("");

  return (
    <>
      <Navigation />
      <div className="home-container">
        <h1>New Questions</h1>
        <div className="card-container">
          {users.map((u) =>
            !u.done ? (
              <div className="card" key={u.user}>
                {u.user} <p>{u.date}</p>
                <button
                  onClick={open}
                  onFocus={setName(u.user)(setImage(u.image))}
                >
                  Show
                </button>
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
              <div className="card" key={u.user}>
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
