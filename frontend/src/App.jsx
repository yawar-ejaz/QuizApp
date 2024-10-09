import axios from "axios";
import {
  Root,
  Login,
  Signup,
  CreateUsername,
  CreatePassword,
} from "./pages/public";
import { Dashboard } from "./pages/private";
import { PrivateRoute, PublicRoute } from "./utils";
import useAuthContext from "./hooks/useAuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_ADDRESS;

function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute user={user} />}>
          <Route path="/" element={<Root />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Route>
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/create-username" element={<CreateUsername />}></Route>
          <Route path="/create-password" element={<CreatePassword />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
