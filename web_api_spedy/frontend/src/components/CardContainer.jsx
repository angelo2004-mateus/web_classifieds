import React, { useEffect, useState } from "react"
import axios from "axios"
import { format } from 'date-fns'
import { ptBR } from "date-fns/locale"

import Card from "./Card"

import '../index.css'

const CardContainer = ({ onUpdateNumCard }) => {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true)
      try {
        const response = await axios.get("http://localhost:3000/classifieds")
        setCards(response.data.rows)
        onUpdateNumCard(response.data.rows.length)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCards()
  }, [onUpdateNumCard])

  const formatDate = (date) => {
    const formattedDate = format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
    return formattedDate
  }

  return (
    <section className="card_container relative flex gap-[3vw] flex-wrap w-full h-[90%] bg-white bg-opacity-0 p-10 overflow-y-scroll">

    {cards == '' ? 
      <p className="m-auto py-1 px-3 bg-[#3b3b3b] text-[#a5a5a5] rounded font-medium 
      ">
        Nenhum Classificado Existente
      </p> : '' }

      {loading ? (
        <p>Loading...</p>
      ) : (
        cards.map((card, index) => (
          <Card
            key={index}
            id={index} 
            title={card.title} 
            date={formatDate(card.date)} 
            desc={card.description} 
            tag={card.tag}
          />
        ))
      )}
    </section>
  )
}

export default CardContainer;
