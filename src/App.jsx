import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;