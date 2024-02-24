'use client'

import { motion, useScroll } from "framer-motion"

type Props = {
  reference: any
}

function TimeLineIcon({reference}: Props) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center']
  })

  return (
    <figure className="absolute -ml-[19.3px] -rotate-90 dark:stroke-text-light-soft stroke-text-dark-soft">
      <svg width={75} height={75} viewBox="0 0 100 100" >
        <circle cx={75} cy={50} r={20} className="stroke-main_color stroke-1 fill-none"/>
        <motion.circle
          cx={75} 
          cy={50} 
          r={20} 
          className="stroke-[5px] dark:fill-bg-dark-normal fill-bg-light-normal"
          style={{pathLength: scrollYProgress}}
        />
        <circle cx={75} cy={50} r={10} className="stroke-1 fill-main_color animate-pulse" />
      </svg>
    </figure>
  )
}

export default TimeLineIcon