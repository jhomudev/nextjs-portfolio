import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <div className="absolute left-1/2 flex items-center">
      <Link
        href={'/'}
        className="relative w-9 h-9"
      >
        <Image src={'/logo.svg'} alt="logo" fill/>
      </Link>
    </div>
  )
}
export default Logo