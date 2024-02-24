'use client'
import { Variants, motion } from "framer-motion";

type ProjectTechsProps = {
  techs: {
    languages: string[];
    frameworks: string[];
    libraries: string[];
    others: string[];
  }
}

type ProjectTechsListProps = {
  items: string[],
  color: string,
}

export function ProjectTechsList({ items, color }: ProjectTechsListProps) {
  const variants: Variants = {
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: i * 0.2
      }
    }),
    hidden: { scale: 0, opacity: 0 }
  }

  return (
    <motion.ul className="flex gap-3 flex-wrap">
      {
        items.length > 0
          ? (
            items.map((item, index) => (
              <motion.li
                custom={index}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                key={index}
                className="flex items-center gap-2 text-sm text-pretty rounded-xl px-2 py-1 border-2 dark:border-bg-dark-soft border-bg-light-soft">
                <span className="rounded-full p-1" style={{backgroundColor: color}} /> {item}
              </motion.li>
            ))
          )
          : (
            <motion.li
                custom={0}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                key={'none'}
                className="flex items-center justify-center gap-2  min-w-10 text-sm text-pretty rounded-xl px-2 py-1 border-2 dark:border-bg-dark-soft border-bg-light-soft">
                ...
              </motion.li>
          )
      }
    </motion.ul>
  )
}


function ProjectTechs({ techs }: ProjectTechsProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold">Lenguajes</h3>
        <ProjectTechsList items={techs.languages} color="#F5A524" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold">Framewoks</h3>
        <ProjectTechsList items={techs.frameworks} color="#18C964" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold">Librerías</h3>
        <ProjectTechsList items={techs.libraries} color="#0070F0" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold">Otros</h3>
        <ProjectTechsList items={techs.others} color="#EE125F" />
      </div>
    </div>
  )
}

export default ProjectTechs