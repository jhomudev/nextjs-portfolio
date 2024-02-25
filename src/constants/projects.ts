import { MY_GITHUB_PAGES_LINK, MY_GITHUB_REPO_LINK } from ".";

type Project = {
  id: string
  name: string
  description: string
  category: string
  image: string
  repositoryLink: string
  url: string | null
  techs: {
    languages: string[]
    frameworks: string[]
    libraries: string[]
    others: string[]
  }
}

export const projects: Project[] = [
  {
    id: 'jhomublog',
    name: 'jhomublog',
    description: 'Jhomublog es una emocionante plataforma de blogging que ofrece a los usuarios una experiencia interactiva y personalizada para expresar sus ideas, compartir conocimientos y conectarse con una comunidad apasionada. Con una interfaz elegante y funciones intuitivas, jhomublog hace que la creación y gestión de contenido sea fácil y divertida.',
    category: 'Desarrollo FullsTack',
    image: '/images/projects/jhomublog.png',
    url: `https://jhomublog.vercel.app`,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/jhomublog`,
    techs: {
      languages: ['TypeScript', 'HTML / TSX', 'CSS'],
      frameworks: ['Next JS', 'React Js', 'Tailwind CSS'],
      libraries: ['Next UI', 'Shadcdn'],
      others: ['Mongo DB', 'Prisma ORM']
    },
  },
  {
    id: 'sysfac-nextjs',
    name: 'Sysfac NextJS',
    description: 'Sistema web integral de ventas e inventario desarrollado utilizando la tecnología Next.js para un rendimiento eficiente y una experiencia de usuario mejorada. Este sistema proporciona herramientas avanzadas para la gestión de productos, ventas, clientes y control de inventario, todo integrado en una aplicación web fluida y altamente receptiva.',
    category: 'Desarrollo FullsTack',
    image: '/images/projects/sysfac_next.png',
    url: `https://sysfac-next.vercel.app`,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/sysfac-next`,
    techs: {
      languages: ['TypeScript', 'HTML / TSX', 'CSS'],
      frameworks: ['Next JS', 'React Js', 'Tailwind CSS'],
      libraries: ['Next UI', 'Chart JS'],
      others: ['MySql']
    },
  },
  {
    id: 'team-work',
    name: 'Team Work',
    description: 'Una plataforma de empleo dinámica y fácil de usar, desarrollada en Next.js, que conecta a empleadores y buscadores de empleo de manera eficiente y efectiva. Con una interfaz intuitiva y características robustas, permite a los usuarios crear cuentas, publicar anuncios de empleo y postularse a oportunidades laborales en un entorno digital seguro y confiable.',
    category: 'Desarrollo FullsTack',
    image: '/images/projects/weather_app.png',
    url: null,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/team-work`,
    techs: {
      languages: ['Javascript', 'HTML / JSX', 'CSS'],
      frameworks: ['Next JS', 'React Js', 'Tailwind CSS'],
      libraries: ['Ant Design'],
      others: ['MySql']
    },
  },
  {
    id: 'weather-app-react-ts',
    name: 'Weather App',
    description: 'Una aplicación indispensable para mantenerte informado sobre las condiciones meteorológicas en cualquier lugar y en cualquier momento. Con una interfaz intuitiva y datos precisos en tiempo real, te proporciona la información meteorológica que necesitas.',
    category: 'Desarrollo Frontend',
    image: '/images/projects/weather_app.png',
    url: `${MY_GITHUB_PAGES_LINK}/weather-app`,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/weather-app`,
    techs: {
      languages: ['TypeScript', 'HTML / JSX', 'CSS'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: ['Next UI', 'Framer Motion'],
      others: ['Openweathermap Api', 'Vite Js']
    },
  },
  {
    id: 'emisora-radial',
    name: 'Sitio Web - Emisora radial',
    description: 'RSitio web de emisora de radio digital para disfrutar de la mejor música, noticias, programas de entretenimiento y transmisiones en vivo desde cualquier lugar del mundo. Diseñado para ofrecer una experiencia auditiva envolvente y una interfaz fácil de usar, conecta a los oyentes con sus estaciones de radio favoritas y les permite explorar nuevas emisoras con solo unos pocos clics.',
    category: 'Desarrollo Frontend',
    image: '/images/projects/radio_website.png',
    url: `${MY_GITHUB_PAGES_LINK}/radio-bendicion/`,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/radio-bendicion`,
    techs: {
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: ['Next UI'],
      others: ['Vite Js']
    },
  },
  {
    id: 'movie-finder',
    name: 'Movie Finder',
    description: 'Descubre y explora una amplia variedad de películas de forma rápida y sencilla. Con una interfaz intuitiva y potentes herramientas de búsqueda y filtrado, esta web te ayuda a encontrar la película perfecta para cada estado de ánimo, ocasión o preferencia personal.',
    category: 'Desarrollo Frontend',
    image: '/images/projects/movie_finder.png',
    url: `${MY_GITHUB_PAGES_LINK}/movie-api-react/`,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/movie-api-react`,
    techs: {
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: [],
      others: ['Rapid API', 'Vite Js']
    },
  },
  {
    id: 'ecomerce',
    name: 'Ecomerce Page',
    description: 'Web simple de ecomerce para descubrir  productos de manera conveniente y segura.',
    category: 'Desarrollo Frontend',
    image: '/images/projects/ecomerce.png',
    url: `${MY_GITHUB_PAGES_LINK}/ecomerce-react/`,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/ecomerce-react`,
    techs: {
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: [],
      others: ['Vite Js']
    },
  },
  {
    id: 'sysfac',
    name: 'Sistema de ventas e inventario',
    description: 'Sysfac es un sistema web desarrollado en PHP diseñado para la gestión de ventas y control de inventario en empresas. Permite a los usuarios administrar productos, controlar el stock, registrar ventas y gestionar clientes de manera eficiente. El sistema utiliza una base de datos MySQL para almacenar y organizar la información relacionada con los productos, ventas y clientes.',
    category: 'Desarrollo FullStack',
    image: '/images/projects/sysfac.png',
    url: null,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/sysfac`,
    techs: {
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: ['DomPdf', 'PhpSpreadsheet'],
      others: ['MySql', 'Laragon']
    },
  },
  {
    id: 'repoo',
    name: 'Repositorio Institucional y sistema de agilización de proyectos',
    description: 'Un sistema web diseñado para agilizar el proceso de gestión de documentos en entornos institucionales. Su principal objetivo es optimizar la creación, revisión, aprobación, almacenamiento y acceso a documentos dentro de una organización. Este sistema proporciona una plataforma centralizada para la colaboración, seguimiento y control de documentos, lo que ayuda a mejorar la eficiencia operativa y la transparencia en la gestión de la información.',
    category: 'Desarrollo FullStack',
    image: '/images/projects/repo.png',
    url: null,
    repositoryLink: `${MY_GITHUB_REPO_LINK}/repo_mvc`,
    techs: {
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: [],
      others: ['MySql', 'Laragon']
    },
  },
  {
    id: 'pazybien',
    name: 'Sitio web - Centro de Salud',
    description: 'Sitio web diseñado para brindar información y servicios a los pacientes y miembros de la comunidad que buscan cuidar su salud y bienestar. Con un enfoque en la accesibilidad y la facilidad de uso.',
    category: 'Desarrollo FullStack',
    image: '/images/projects/pazybien_website.png',
    url: null,
    repositoryLink: 'https://github.com/peppo-su/pazybien',
    techs: {
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: [],
      others: ['MySql', 'Laragon']
    },
  }
]
