'use client'
import React from 'react'
import { skills } from '@/constants'
import Image from 'next/image'
import { motion } from 'framer-motion'


type Props = {}

function SkillsLists({}: Props) {
  return (
    <ul className='flex gap-7 flex-wrap justify-center'>
      {
        skills.map((skill) => (
          <motion.li
            key={skill.name}
            initial={{
              scale: 0,
              opacity: 0
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.5,
                type: 'tween'
              },
            }}
            whileHover={{
              scale: 1.1
            }}
            className='flex items-center gap-3 px-5 py-4 rounded-md bg-soft-color dark:border-bg-light-soft border-bg-dark-soft'
          >
            <div className='relative w-[20px] h-[20px]'>
              {
                (typeof skill.image === 'string')
                  ? (<Image src={skill.image} alt={skill.name} fill />)
                  : (
                      <>
                        <Image src={skill.image.light} alt={skill.name} fill className='dark:hidden block' />
                        <Image src={skill.image.dark} alt={skill.name} fill className='hidden dark:block' />
                      </>
                    )
              }
            </div>
            <span className='font-semibold text-lg'>{skill.name}</span>
          </motion.li>
        ))
      }
    </ul>
  )
}

export default SkillsLists