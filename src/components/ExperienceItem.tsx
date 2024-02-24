import React, { useRef } from 'react'
import TimeLineIcon from './TimeLineIcon'
import { motion } from 'framer-motion'


type Props = {
  position: string
  company: string
  startDate: string
  endDate: string | 'now'
  children: React.ReactNode
}

function ExperienceItem({ children, company, startDate, endDate, position }: Props) {
  const  ref = useRef(null)
  return (
    <motion.li
      ref={ref}
      initial={{y: 50}}
      whileInView={{ y: 0 }}
      transition={{duration: 0.5, type: 'spring'}}
    >
      <TimeLineIcon reference={ref} />
      <div className='relative grid md:grid-cols-5 gap-6 items-start ml-14 md:ml-32'>
        <div className="md:col-span-2 flex flex-col gap-1">
          <strong className="text-xl text-main_color font-bold  text-balance">{ position }</strong>
          <span className="text-base text-second_color font-semibold">{ company }</span>
          <small className="text-sm text-soft-color">{startDate} - { endDate } </small>
        </div>
        <div className="md:col-span-3 flex">
          <p className="text-base text-soft-color text-pretty">
            { children }
          </p>
        </div>
      </div>
    </motion.li>
  )
}

export default ExperienceItem