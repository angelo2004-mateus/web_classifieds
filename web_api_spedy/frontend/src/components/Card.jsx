import { motion } from "framer-motion"

const Card = ({ id, title, date, desc, tag }) => {
  let bgCard

  if (id % 3 === 1) bgCard = '#CA9BF9'
  else if (id % 3 === 2) bgCard = '#5AC79D'
  else bgCard = '#F7FD91'

  return (
    <motion.div 
      whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 1000, damping: 10 } }}
      className="cursor-pointer relative flex-1 basis-[350px] md:max-w-[400px] h-[200px] max-sm:max-w-full border
      border-black rounded-sm p-[20px]" style={{backgroundColor: bgCard}}>

      <h2 className="font-medium text-[20px]">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h2>

      <p className="opacity-90">{date}</p>
      <p className="opacity-70 italic mt-3">{desc}</p>

      <div className="absolute left-0 bottom-0 w-full p-3">
        <span className="bg-black text-white opacity-50 font-medium px-2 py-1 rounded-sm">{tag}</span>
      </div>
    </motion.div>
  )
}

export default Card;
