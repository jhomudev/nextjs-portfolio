import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <div className="flex items-center">
      <Link
        href={'/'}
        className="w-16 h-16"
      >
        <Image src={'/favicon.png'} alt="logo" width={64} height={64} />
      </Link>
    </div>
  )
}
export default Logo