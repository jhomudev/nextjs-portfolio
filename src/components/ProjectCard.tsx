import Image from "next/image"
import { Button } from "./ui/button"
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons"
import Link from "next/link"
import { motion } from "framer-motion"

type Props = {
  slug: string,
  name: string
  image: string
  category: string
  description: string
  repositoryLink: string
  url: string | null
}

function ProjectCard({slug, image, name, category, description, repositoryLink, url}: Props) {
  return (
    <motion.article
      initial={{y: 20}}
      whileInView={{ y: 0 }}
      transition={{duration: 1.2, type: 'spring'}}
      className="flex gap-5 flex-col p-5 sm:p-10 rounded-lg border-4 border-bg-light-soft dark:border-bg-dark-soft"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <motion.div
          whileHover={{scale: 1.1}}
          className="relative w-full h-full"
        >
          <Image src={image} alt={`jhomublog - ${name}`} loading="lazy"  width={700} height={700} className="w-full h-auto object-fit aspect-video"/>
          <Link href={`/projects/${slug}`} className="absolute w-full h-full left-0 top-0" />
        </motion.div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-second_color font-semibold">{ category }</span>
        <h2 className="line-clamp-2">
          <Link
            className="text-main_color hover:underline w-max font-bold text-2xl md:text-3xl text-balance"
            href={`/projects/${slug}`}>{name}</Link>
        </h2>
        <div className="flex gap-4 items-center mt-3">
          <Button className="flex gap-2 items-center"> <GitHubLogoIcon width={20} height={20} />
            <Link href={repositoryLink} target="_blank">Code</Link>
          </Button>
          {
            url && (
              <Button variant={'outline'} className="flex gap-2 items-center"> <Link2Icon width={20} height={20} />
                <Link href={url} target="_blank">Preview</Link>
              </Button>
            )
          }
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard