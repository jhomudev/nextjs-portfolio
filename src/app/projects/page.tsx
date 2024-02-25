import ProjectsList from '@/components/ProjectsList'

function ProjectsPage() {
  return (
    <div className='w-full'>
      <section className='py-10 md:py-20'>
        <div className="container-block">
          <div className='max-w-4xl'>
            <h1 className='title-section'>Descubre mis proyectos</h1>
            <p className='text-soft-color text-pretty'>
              Aquí comparto contigo mis proyectos más recientes que reflejan mi pasión por la innovación tecnológica. Estos proyectos representan mi dedicación en la creación de soluciones eficientes y atractivas para problemas del mundo real, utilizando mi experiencia en desarrollo web y habilidades de programación.
            </p>
          </div>
          <div className="my-10">
            <ProjectsList />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage