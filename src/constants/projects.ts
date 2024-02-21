import { MY_GITHUB_PAGES_LINK, MY_GITHUB_REPO_LINK } from ".";

export const projects = [
  {
    id: 'jhomublog',
    name: 'jhomublog',
    category: 'Desarrollo FullsTack',
    image: '/images/projects/jhomublog.png',
    linkPage: `jhomublog.vercel.app`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/jhomublog`,
    techs: {
      descrip: 'Un blog para compartir ideas, tutoriales y consejos.',
      languages: ['TypeScript', 'HTML / TSX', 'CSS'],
      frameworks: ['Next JS', 'React Js', 'Tailwind CSS'],
      libraries: ['Next UI', 'Shadcdn'],
      others: ['Mongo DB', 'Prisma ORM']
    },
    date: new Date('2024-01-15')
  },
  {
    id: 'sysfac-nextjs',
    name: 'Sysfac NextJS',
    category: 'Desarrollo FullsTack',
    image: '/images/projects/jhomublog.png',
    linkPage: `sysfac-next.vercel.app`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/sysfac-next`,
    techs: {
      descrip: 'Sistema de ventas e inventario realizado con NextJS.',
      languages: ['TypeScript', 'HTML / TSX', 'CSS'],
      frameworks: ['Next JS', 'React Js', 'Tailwind CSS'],
      libraries: ['Next UI', 'Chart JS'],
      others: ['MySql']
    },
    date: new Date('2023-12-05')
  },
  {
    id: 'team-work',
    name: 'Team Work',
    category: 'Desarrollo FullsTack',
    image: '/images/projects/jhomublog.png',
    linkPage: `sysfac-next.vercel.app`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/team-work`,
    techs: {
      descrip: 'Plataforma de búsqueda de empleo.',
      languages: ['Javascript', 'HTML / JSX', 'CSS'],
      frameworks: ['Next JS', 'React Js', 'Tailwind CSS'],
      libraries: ['Ant Design'],
      others: ['MySql']
    },
    date: new Date('2023-11-02')
  },
  {
    id: 'weather-app-react-ts',
    name: 'Weather App',
    category: 'Desarrollo Frontend',
    image: '/images/projects/app-weather-ts.png',
    linkPage: `${MY_GITHUB_PAGES_LINK}/weather-app/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/weather-app`,
    techs: {
      descrip: 'React Js, Typescript, Tailwind CSS, Next UI.',
      languages: ['TypeScript', 'HTML / JSX', 'CSS'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: ['Next UI', 'Framer Motion'],
      others: ['Openweathermap Api', 'Vite Js']
    },
    date: new Date('2023-09-29')
  },
  {
    name: 'Sitio Web - Emisora radial',
    id: 'emisora-radial',
    category: 'Desarrollo Frontend',
    image: '/images/projects/app-radio.png',
    linkPage: `${MY_GITHUB_PAGES_LINK}/radio-bendicion/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/radio-bendicion`,
    techs: {
      descrip: 'React Js, Tailwind CSS, Next UI.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: ['Next UI'],
      others: ['Vite Js']
    },
    date: new Date('2023-09-03')
  },
  {
    id: 'movie-finder',
    name: 'Movie Finder',
    category: 'Desarrollo Frontend',
    image: '/images/projects/app-movies.png',
    linkPage: `${MY_GITHUB_PAGES_LINK}/movie-api-react/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/movie-api-react`,
    techs: {
      descrip: 'React Js, Tailwind CSS.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: [],
      others: ['Rapid API', 'Vite Js']
    },
    date: '2023-08-13'
  },
  {
    id: 'ecomerce',
    name: 'Ecomerce Page',
    category: 'Desarrollo Frontend',
    image: '/images/projects/app-ecommerce.png',
    linkPage: `${MY_GITHUB_PAGES_LINK}/ecomerce-react/`,
    linkGithub: `${MY_GITHUB_REPO_LINK}/ecomerce-react`,
    techs: {
      descrip: 'React Js, Tailwind CSS, Javascript.',
      languages: ['HTML / JSX', 'CSS', 'Javascript'],
      frameworks: ['React Js', 'Tailwind CSS'],
      libraries: [],
      others: ['Vite Js']
    },
    date: new Date('2023-08-18')
  },
  {
    id: 'sysfac',
    name: 'Sistema de ventas e inventario',
    category: 'Desarrollo FullStack',
    image: '/images/projects/app-sysfac.png',
    linkPage: null,
    linkGithub: `${MY_GITHUB_REPO_LINK}/sysfac`,
    techs: {
      descrip: 'PHP, MySql, Javascript, CSS, HTML.',
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: ['DomPdf', 'PhpSpreadsheet'],
      others: ['MySql', 'Laragon']
    },
    date: new Date('2023-07-10')
  },
  {
    id: 'repoo',
    name: 'Repositorio Institucional y sistema de agilización de proyectos',
    category: 'Desarrollo FullStack',
    image: '/images/projects/app-repoo.png',
    linkPage: null,
    linkGithub: `${MY_GITHUB_REPO_LINK}/repo_mvc`,
    techs: {
      descrip: 'PHP, MySql, Javascript, CSS, HTML.',
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: [],
      others: ['MySql', 'Laragon']
    },
    date: new Date('2023-07-26')
  },
  {
    id: 'pazybien',
    name: 'Sitio web - Centro de Salud',
    category: 'Desarrollo FullStack',
    image: '/images/projects/app-pazybien.png',
    linkPage: null,
    linkGithub: 'https://github.com/peppo-su/pazybien',
    techs: {
      descrip: 'PHP, MySql, Javascript, CSS, HTML.',
      languages: ['PHP', 'SQL', 'Javascript', 'CSS', 'HTML'],
      frameworks: [],
      libraries: [],
      others: ['MySql', 'Laragon']
    },
    date: new Date('2022-10-29')
  }
]
