import { useState } from "react";
import "./App.css";
import { CreateContentModal } from "./components/CreateContentModal";
import { SideBar } from "./components/sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <CreateContentModal
        onClose={() => setModalOpen(false)}
        open={modalOpen}
      />
      <SideBar setModalOpen={setModalOpen} />
    </>
  );
}

export default App;
