'use client'

import { projects } from ".."
import ProjectCard from "./ProjectCard"


function ProjectsList() {
  return (
    <>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {
          projects.map(({id, techs, ...props }) => (
            <ProjectCard
              key={id}
              slug={ id }
              {...props}
            />
          ))
        }
      </div>
    </>
  )
}

export default ProjectsList