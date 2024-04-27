import React, { useState } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"

import { useModal } from "../context/ModalContext"

const Modal = () => {

  const inputStyle = 'border border-black bg-slate-100 outline-none p-2 rounded'

  const { isModalOpen, closeModal } = useModal()

  const handleModal = (e) => {
    if (e.target.tagName == 'SECTION') {
      closeModal()
    }
  }

  const [formData, setFormData] = useState({ title: '', description: '', tag: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:3000/classifieds", formData)
    window.location.href = 'http://localhost:5173/'
  }

  if (!isModalOpen) return null

  return (
    <section onClick={handleModal} className='flex absolute top-0 left-0 w-full h-screen backdrop-blur-sm'>
      <motion.div whileInView={{ scale: 1.05, transition: { type: 'spring', stiffness: 1000, damping: 5 } }}
      className='m-auto w-[400px] h-[400px] bg-white rounded border border-black'>
        <form onSubmit={handleSubmit} className='flex flex-col h-full gap-5 justify-center px-10'>
          <h2 className='text-center text-[2vw] font-medium leading-none mb-5'>Cadastar Novo Classificado</h2>

          <input required className={inputStyle} type="text" placeholder="Title" name="title" value={formData.title} onChange={handleChange} />
          <input required className={inputStyle} type="text" placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
          <input className={inputStyle} type="text" placeholder="Tag" name="tag" value={formData.tag} onChange={handleChange} />
          <motion.button whileHover={{ scale: .970, transition: { type: 'spring', stiffness: 1000, damping: 10 } }} type="submit" className='bg-[#CA9BF9] p-2 border border-black rounded font-medium'>Submit</motion.button>
        </form>
      </motion.div>
    </section>
  )
}

export default Modal;
