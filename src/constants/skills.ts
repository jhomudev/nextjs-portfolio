type Skill = {
  name: string
  image: string | {
    light: string
    dark: string
  }
  level: string
}

export const skills: Skill[] = [
  {
    name: 'JavaScript',
    image:'/images/svgs/javascript.svg',
    level: 'Intermedio'
  },
  {
    name: 'Typescript',
    image:'/images/svgs/typescript.svg',
    level: 'Intermedio'
  },
  {
    name: 'HTML5',
    image: '/images/svgs/html5.svg',
    level: 'Avanzado'
  },
  {
    name: 'CSS',
    image:'/images/svgs/css.svg',
    level: 'Intermedio'
  },
  {
    name: 'PHP',
    image: {
      light: '/images/svgs/php_light.svg',
      dark: '/images/svgs/php_dark.svg',
    },
    level: 'Intermedio'
  },
  {
    name: 'React JS',
    image:'/images/svgs/react.svg',
    level: 'Intermedio'
  },
  {
    name: 'NextJS',
    image:'/images/svgs/nextjs.svg',
    level: 'Intermedio'
  },
  {
    name: 'NodeJS',
    image:'/images/svgs/nodejs.svg',
    level: 'Intermedio'
  },
  {
    name: 'Tailwind CSS',
    image: '/images/svgs/tailwindcss.svg',
    level: 'Intermedio'
  },
  {
    name: 'MySql',
    image:'/images/svgs/mysql.svg',
    level: 'Intermedio'
  },
  {
    name: 'MariaDB',
    image:'/images/svgs/mariadb.svg',
    level: 'Intermedio'
  },
  {
    name: 'Mongo DB',
    image:'/images/svgs/mongodb.svg',
    level: 'Intermedio'
  },
  {
    name: 'Microsoft SQL Server',
    image:'/images/svgs/sql-server.svg',
    level: 'Intermedio'
  },
  {
    name: 'PostgreSQL',
    image:'/images/svgs/postgresql.svg',
    level: 'Intermedio'
  },
  {
    name: 'Prisma',
    image: {
      light: '/images/svgs/prisma_light.svg',
      dark: '/images/svgs/prisma_dark.svg',
    },
    level: 'Intermedio'
  },
  {
    name: 'Figma',
    image: '/images/svgs/figma.svg',
    level: 'Intermedio'
  },
  {
    name: 'Framer',
    image: {
      light: '/images/svgs/framer_light.svg',
      dark: '/images/svgs/framer_dark.svg',
    },
    level: 'Intermedio'
  },
  {
    name: 'Git',
    image:'/images/svgs/git.svg',
    level: 'Intermedio'
  },
  {
    name: 'Github',
    image:'/images/svgs/github.svg',
    level: 'Intermedio'
  },
  {
    name: 'Shadcdn',
    image: {
      light: '/images/svgs/shadcdn_light.svg',
      dark: '/images/svgs/shadcdn_dark.svg',
    },
    level: 'Intermedio'
  },
  {
    name: 'SWR',
    image: {
      light: '/images/svgs/swr_light.svg',
      dark: '/images/svgs/swr_dark.svg',
    },
    level: 'Intermedio'
  },
  {
    name: 'Zod',
    image: '/images/svgs/zod.svg',
    level: 'Intermedio'
  },
]