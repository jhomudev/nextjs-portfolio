import HireButton from "@/components/HireButton";
import TypingAnimation from "@/components/TypingAnimation";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuContent, DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { MY_EMAIL, MY_LINKEDIN_PROFILE_LINK } from "..";

export default function Home() {
  return (
    <section className="container-block w-full min-h-[calc(100dvh_-_90px)] flex flex-col md:flex-row gap-4 items-center">
      <div className="flex md:hidden lg:flex flex-1 items-center justify-center">
        <Image src={'/images/profile/profile-1.png'} alt="jhomudev" width={300} height={300} className="w-full max-w-lg h-auto" />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <div className="content flex items-center lg:items-start flex-col gap-5">
          <a href={ MY_LINKEDIN_PROFILE_LINK } target="_blank" className="w-max border-2 text-sm border-main_color bg-soft-color animate-bounce rounded-full px-2 py-1">Disponible para trabajar</a>
          <div className="text-2xl md:text-3xl text-balance  font-bold uppercase">
            <h1 className="text-4xl md:text-6xl">Soy Jhonan Muñoz</h1>
              <TypingAnimation
                className="text-main_color"
                strings={[
                  "Desarrollador Web",
                  "Diseñador Web",
                  "Ingeniero de Software",
                ]}
                typeSpeed={30}
                backSpeed={50}
                loop
              />
          </div>
          <p className="text-pretty text-soft-color text-base">
          Ingeniero de Software y Desarrollador Web apasionado. Explora mi portafolio para descubrir mi enfoque en la creación de experiencias digitales impactantes.
          </p>
          <div className="flex gap-5 items-center justify-center lg:justify-start">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={"primary"} size={"lg"} className="font-bold" >Curriculum</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><Link className="w-full h-full font-titillium" href={'https://jhomudev.github.io/curriculum/'} target="_blank">CV Online</Link></DropdownMenuItem>
                <DropdownMenuItem><Link className="w-full h-full font-titillium" href={'/cv_jhonanmc.pdf'} target="_blank">Descargar</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant={'link'}>
              <Link href={`mailto:${MY_EMAIL}`} target="_blank">Contátame</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block fixed left-10 bottom-10 z-10">
        <HireButton animate={{ scale: 0.9 }} />
      </div>
    </section>
  )
}
