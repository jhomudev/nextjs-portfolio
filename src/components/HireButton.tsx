'use client'
import { MotionProps, motion } from "framer-motion"
import CircularText from "./CircularText"
import Link from "next/link"

function HireButton(props: MotionProps) {
  return (
    <motion.div {...props} className="relative p-5 font-bold font-dosis uppercase">
      <motion.div
        whileHover={{ scale: 0.9}}
        className="relative z-10 invert-bg-color invert-text-color w-[110px] h-[110px] rounded-full m-9">
        <Link href='' className="absolute w-full h-full top-0 left-0 grid place-items-center">Contáctame</Link>
      </motion.div>
      <CircularText className="absolute left-0 top-0 w-full h-full fill-bg-dark-normal dark:fill-bg-light-normal animate-spin-slow"/>
    </motion.div>
  )
}

export default HireButton