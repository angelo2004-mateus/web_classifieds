import React from "react"
import { motion } from "framer-motion"
import { useModal } from '../context/ModalContext'

const Navbar = () => {
  const { openModal } = useModal()

  const handleOpenModal = () => {
    openModal()
  }

  return (
    <nav className="flex flex-col justify-between items-center px-10 py-3 w-full bg-black text-white">
      <div className="flex justify-between items-center w-full">

      <h1 className="text-[3vw] max-md:text-[4vw] lg:text-[2vw]">Classificados</h1>
      
      <motion.button
        onClick={handleOpenModal}
        whileHover={{ scale: 0.9, transition: { type: 'spring', stiffness: 1000, damping: 10 } }}
        className="bg-white text-black transition-colors max-md:p-[1vw] md:p-2 font-medium rounded-sm"
      >
        + Novo Classificado
      </motion.button>
      </div>
    </nav>
  )
}

export default Navbar
