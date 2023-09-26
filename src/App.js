import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Person from "./components/Person";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
// import { useEffect, useState } from "react";
import FetchExample from "./components/FetchExample";

function App() {
  // const [first, setposts] = useState(null);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setposts(data);
  //     });
  // }, []);
  return (
    <div>
      <Navbar />
      {/* <div>
        {posts ? (
          <ul>
            {posts.map((post) => {
              return (
                <li>
                  <h3>{post.tittle}</h3>
                  <p>{post.body}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>Loding...</h3>
        )}
      </div> */}
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="person" element={<FetchExample />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
