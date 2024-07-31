import axios from "axios";
import {
  Root,
  Login,
  Signup,
  CreateUsername,
  CreatePassword,
} from "./pages/public";
import { Dashboard } from "./pages/private";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_ADDRESS;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/create-username" element={<CreateUsername />}></Route>
        <Route path="/create-password" element={<CreatePassword />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
