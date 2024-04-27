import React, { useState } from "react"
import CardContainer from "./components/CardContainer"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import { ModalProvider } from "./context/ModalContext"
import Modal from "./components/Modal"

import './index.css'

const App = () => {
  const [numCard, setNumCard] = useState(0)

  return (
    <ModalProvider>
      <main className="flex flex-col w-full h-full bg-black">
        <Navbar />
        <CardContainer onUpdateNumCard={setNumCard}/>
        <Footer numCard={numCard}/>
        <Modal />
      </main>
    </ModalProvider>
  );
};

export default App
