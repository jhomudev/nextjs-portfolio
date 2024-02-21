'use client'
import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"
import Image from "next/image"
import useAppTheme from "@/hooks/useAppTheme"
import { motion } from "framer-motion"
import { useState } from "react"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import HireButton from "./HireButton"
import { networks } from ".."


const navItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Projects',
    href: '/projects'
  },
]

function NavBar() {
  const pathname = usePathname()
  const { toggleTheme } = useAppTheme()
  const [openNav, setOpenNav] = useState(false)

  return (
    <div>
      <header className="relative container-block w-full h-[90px] font-medium flex justify-between items-center">
        <button 
          aria-label="menu" 
          title="Menu" 
          className="relative z-20 block md:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <HamburgerMenuIcon width={30} height={30} fontWeight={'bold'} />
        </button>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {
              navItems.map((item) => {
                const isSelected = pathname === item.href
                const styles = isSelected ? "after:left-0 after:w-full" : "after:left-0 after:w-0"
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        relative 
                        after:content-normal after:transition-all after:duration-300 after:absolute after:top-[120%] ${styles} 
                        hover:after:w-full  after:h-[1px] after:bg-text-dark-normal  dark:after:bg-text-light-normal`
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <Logo />
        <ul className="hidden md:flex relative items-center gap-3">
          {
            networks.filter(item => item.isMain).map((network) => (
              <motion.li key={network.name} whileHover={{y: -2}}>
                <Link target="_blank" href={ network.link }  className="relative block w-[22px] h-[22px]" >
                  <Image src={network.image || ''} alt={network.name} fill />
                </Link>
              </motion.li>
            ))
          }
          <li>
            <button
              title="Change theme"
              aria-label="Change theme"
              className="relative block w-[30px] h-[30px]"
              onClick={toggleTheme}
            >
              <Image src={'/images/svgs/moon.svg'} alt="moon" fill />
            </button>
          </li>
        </ul>
        <div className="block md:hidden -mr-14">
          <HireButton animate={{scale: 0.5}} />
        </div>
      </header>
      <div className={`fixed top-0 left-0 z-10 w-full h-[100dvh] ${openNav ? 'grid' : 'hidden'} place-items-center md:hidden`}>
        <motion.div
          initial={{
            scale: 0.4,
            opacity: 0
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              type: 'spring'
            }
          }}
          className={`
            flex flex-col items-center justify-center gap-7 w-[90%] max-w-[400px] sm:max-w-[500px] h-[80dvh] max-h-[500px] min-h-[300px] 
            p-5 rounded-lg dark:text-text-dark-normal text-text-light-normal bg-bg-dark-soft/60 dark:bg-bg-light-soft/60 backdrop-blur-md
          `}
        >
          <nav>
            <ul className="flex flex-col justify-center items-center gap-4 text-lg">
              {
                navItems.map((item) => {
                  const isSelected = pathname === item.href
                  const styles = isSelected ? "after:left-0 after:w-full" : "after:left-0 after:w-0"
                  return (
                    <li key={item.href}>
                      <Link
                        href="/"
                        className={`
                          relative 
                          after:content-normal after:transition-all after:duration-300 after:absolute after:top-[120%] ${styles} 
                          hover:after:w-full after:h-[1px] dark:after:bg-text-dark-normal after:bg-text-light-normal`
                        }
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          <ul className="relative flex justify-center items-center gap-3">
            {
              networks.filter(item => item.isMain).map((network) => (
                <motion.li key={network.name} whileHover={{y: -2}}>
                  <Link target="_blank" href={ network.link }  className="relative block w-[22px] h-[22px]" >
                    <Image src={network.image || ''} alt={network.name} fill />
                  </Link>
                </motion.li>
              ))
            }
            <li>
              <button
                title="Change theme"
                aria-label="Change theme"
                className="relative block w-[30px] h-[30px]"
                onClick={toggleTheme}
              >
                <Image src={'/images/svgs/moon.svg'} alt="moon" fill />
              </button>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
export default NavBar