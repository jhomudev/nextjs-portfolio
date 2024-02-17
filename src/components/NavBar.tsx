import Link from "next/link"
import Logo from "./Logo"

function NavBar() {
  return (
    <div>
      <header className="w-full h-[80px] container mx-auto font-medium flex justify-between items-center">
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
          </ul>
        </nav>
        <Logo />
        <ul>
          <li><Link target="_blank" href="/">T</Link></li>
          <li><Link target="_blank" href="/">T</Link></li>
          <li><Link target="_blank" href="/">T</Link></li>
          <li><Link target="_blank" href="/">T</Link></li>
        </ul>
      </header>
    </div>
  )
}
export default NavBar