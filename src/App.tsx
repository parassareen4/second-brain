import { useState } from "react";
import "./App.css";
import { CreateContentModal } from "./components/CreateContentModal";
import { SideBar } from "./components/sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./components/signup";
import { SignIn } from "./components/signin";
import { ShareBrain } from "./components/ShareBrain";
import { DachiSideBar } from "./components/dachisidebar";

function App({ sharedLink }: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [sharemodalOpen, setshareModalOpen] = useState(false);
  return (
    <>
      <CreateContentModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
      />
      <ShareBrain
        onClose={() => setshareModalOpen(false)}
        open={sharemodalOpen}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/sidebar"
            element={
              <SideBar
                setshareModalOpen={setshareModalOpen}
                setModalOpen={setModalOpen}
              />
            }
          />
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path={`/api/v1/${sharedLink}`}
            element={<DachiSideBar sharedLink={sharedLink} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
