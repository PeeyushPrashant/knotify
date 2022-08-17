import "./App.css";
import { Login, Signup, Home, Explore, BookMark } from "./features";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAllPosts, getUserPost } from "./features/Home/postSlice";
import { getAllUsers } from "./features/Profile/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Aside } from "./components";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      dispatch(getAllPosts());
      dispatch(getAllUsers());
      dispatch(getUserPost(user.username));
    }
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmark" element={<BookMark />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
