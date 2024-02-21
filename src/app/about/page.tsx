import SkillsLists from "@/components/SkillsLists"
import { MagicWandIcon, RocketIcon } from "@radix-ui/react-icons"
import Image from "next/image"

function AboutPage() {
  return (
    <>
      <section className="w-full bg-soft-color py-20">
        <div className="container block">
          <div className="mb-20">
            <h1 className="text-center text-3xl md:text-5xl font-bold uppercase font-dosis">La pasión alimenta al propósito!</h1>
          </div>
          <div className="flex gap-10 flex-col md:flex-row">
            <div className="flex-1 flex justify-center mdjustify-end">
              <div className="relative mr-5 before:content-normal before:absolute before:-top-[2px] before:-right-[5px] before:rounded-2xl before:h-[102%] before:w-[102%] dark:before:bg-bg-light-normal before:bg-bg-dark-normal">
                <Image src={'/images/profile/profile-2.jpg'} alt="jhomudev" width={200} height={200} className="relative z-0 rounded-xl w-full min-w-[300px] lg:min-w-[400px] max-w-md h-auto" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl text-main_color font-semibold font-dosis uppercase mb-2">Sobre mí</h2>
              <p className="text-pretty text-soft-color text-base">
                <strong className="font-bold">Ingeniero de Software, Desarrollador Frontend en busca de oportunidades.</strong>
                Apasionado desarrollador con una profunda fascinación por la tecnología y la creatividad.
                Mi viaje en el mundo digital se ha centrado en el aprendizaje y la experimentación.
                Mi enfoque radica en ofrecer soluciones que no solo cumplan con los objetivos,
                sino que también cautiven a los usuarios y hagan una diferencia significativa.
                Espero trabajar contigo para llevar tus proyectos al siguiente nivel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="container-block">
          <div className="text-center mb-2">
            <h2 className="text-2xl text-main_color font-semibold font-dosis uppercase flex gap-2 justify-center items-center"><RocketIcon width={25} height={25} /> Skills</h2>
            <span className="text-pretty text-soft-color text-sm font-semibold">| Conoce las tecnologías que manejo | </span>
          </div>
          <br />
          <div className="w-full">
            <SkillsLists />
          </div>
        </div>
      </section>
      <section className="w-full py-20">
        <div className="container-block">
          <div className="mb-2">
            <h2 className="text-2xl text-main_color font-semibold font-dosis uppercase flex gap-2 items-center"><MagicWandIcon width={25} height={25} /> Experiencia</h2>
            <span className="text-pretty text-soft-color text-sm font-semibold">| He realizado y participado en diversos proyectos, los cuales me ayudaron a adquirir las habilidades que tengo === {'>'} </span>
          </div>
          <br />
          <div className="w-full">
            {/* content */}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage