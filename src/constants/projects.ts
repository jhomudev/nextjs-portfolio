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
    description: 'Un blog para compartir ideas, tutoriales y consejos.',
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
    description: 'Sistema de ventas e inventario realizado con NextJS.',
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
    description: 'Plataforma de búsqueda de empleo.',
    category: 'Desarrollo FullsTack',
    image: '/images/projects/weather_app.png',
    url: `https://sysfac-next.vercel.app`,
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
    description: 'React Js, Typescript, Tailwind CSS, Next UI.',
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
    description: 'React Js, Tailwind CSS, Next UI.',
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
    description: 'React Js, Tailwind CSS.',
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
    description: 'React Js, Tailwind CSS, Javascript.',
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
    description: 'PHP, MySql, Javascript, CSS, HTML.',
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
    description: 'PHP, MySql, Javascript, CSS, HTML.',
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
    description: 'PHP, MySql, Javascript, CSS, HTML.',
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
