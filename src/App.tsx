import { useState } from "react";
import "./App.css";
import { CreateContentModal } from "./components/CreateContentModal";
import { SideBar } from "./components/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./components/signup";
import { SignIn } from "./components/signin";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <CreateContentModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/sidebar"
            element={<SideBar setModalOpen={setModalOpen} />}
          />
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
