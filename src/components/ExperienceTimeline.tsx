'use client'
import { format } from "@formkit/tempo"
import { experience } from ".."
import ExperienceItem from "./ExperienceItem"
import { useScroll, motion } from "framer-motion"
import { useRef } from "react"

function ExperienceTimeline() {
  const ref =  useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  return (
    <div className="relative" ref={ref}>
      <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-8 top-0 w-[4px] h-full bg-text-dark-soft dark:bg-text-light-soft origin-top"
      />
        <ul className="flex gap-12 flex-col ml-4">
          {
            experience.map(({ id, description, position, company ,endDate ,startDate }) => (
              <ExperienceItem
                key={id}
                position={position}
                company={company}
                endDate={ format({date: startDate, format: 'MMMM YYYY'})}
                startDate={ format({date: endDate, format: 'MMMM YYYY'})}
              >
                {description}
              </ExperienceItem>
            ))
          }
          
        </ul>
    </div>
  )
}

export default ExperienceTimeline