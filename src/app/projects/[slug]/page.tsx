'use client'
import ProjectTechs from "@/components/ProjectTechs"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/constants"
import { ArrowLeftIcon, GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: {
    slug: string
  }
}

function page({ params: { slug } }: Props) {
  const project = projects.find(project => project.id === slug)
  
  if (!project) return (
    <>
      <div>
        <Link href={'/projects'} className="flex gap-2 items-center">
          <ArrowLeftIcon width={20} height={20} />
          Volver
        </Link>
        <br />
        <span className="text-3xl font-bold uppercase text-second_color">Proyecto no encontrado</span>
      </div>
    </>
  )

  return (
    <section className="pb-20">
      <div className="container-block">
        <Link href={'/projects'} className="flex gap-2 items-center">
          <ArrowLeftIcon width={20} height={20} />
          Volver
        </Link>
        <br />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold uppercase text-main_color">{project?.name}</h1>
            <span className="text-sm text-second_color">{ project?.category }</span>
          </div>
          <Separator />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{type: 'spring', duration: 1.5}}
          >
            <Image
              src={project?.image}
              alt="jhomublog"
              width={1000} height={1000}
              className="max-w-2xl rounded-lg w-full h-auto object-cover aspect-video"
              style={{WebkitBoxReflect: 'right 0 linear-gradient(to right,transparent, rgba(0,0,0,0.1))'}}
            />
          </motion.div>
          <Separator />
          <div className="flex gap-4 items-center mt-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{type: 'spring'}}
            >
              <Button variant={'primary'} className="flex gap-2 items-center">
                  <GitHubLogoIcon width={20} height={20} />
                  <Link href={project.repositoryLink} target="_blank">Code</Link>
              </Button>
            </motion.div>
            {
              project.url && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{type: 'spring'}}
                >
                  <Button variant={'outline'} className="flex gap-2 items-center">
                    <Link2Icon width={20} height={20} />
                    <Link href={project.url} target="_blank">Preview</Link>
                  </Button>
                </motion.div>
              )
            }
          </div>
          <div>
            <p className="text-pretty text-soft-color text-base">
              {project?.description}
            </p>
          </div>
          <div>
            <ProjectTechs techs={project.techs}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page